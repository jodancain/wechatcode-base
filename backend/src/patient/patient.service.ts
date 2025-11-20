import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Metric } from '../metric/entities/metric.entity';
import { Diet } from '../diet/entities/diet.entity';

const AI_SERVICE_URL = 'http://localhost:8000';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,
    @InjectRepository(Diet)
    private readonly dietRepository: Repository<Diet>,
    private readonly httpService: HttpService,
  ) {}

  // Example: Find or create a patient based on WeChat openId
  async findOrCreateByOpenId(openId: string): Promise<Patient> {
    let patient = await this.patientRepository.findOne({ where: { wechatOpenId: openId } });
    if (!patient) {
      patient = this.patientRepository.create({ wechatOpenId: openId });
      await this.patientRepository.save(patient);
    }
    return patient;
  }

  // Example: Get all patients for the doctor's dashboard
  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  async findDetailsById(id: string) {
    const patient = await this.patientRepository.findOneBy({ id });
    if (!patient) {
      throw new Error('Patient not found');
    }

    const metrics = await this.metricRepository.find({ where: { patient: { id } }, order: { recordedAt: 'DESC' } });
    const diets = await this.dietRepository.find({ where: { patient: { id } }, order: { recordedAt: 'DESC' } });

    // Call AI service for risk analysis
    let riskAnalysis = { riskLevel: 'N/A', message: 'AI service unavailable' };
    try {
      const aiResponse = await firstValueFrom(
        this.httpService.post(`${AI_SERVICE_URL}/analyze-risk`, { metrics, diets }),
      );
      riskAnalysis = aiResponse.data;
    } catch (error) {
      console.error('Could not connect to AI service:', error.message);
    }

    return {
      ...patient,
      metrics,
      diets,
      riskAnalysis,
    };
  }
}
