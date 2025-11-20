import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metric, MetricType } from './entities/metric.entity';
import { Patient } from '../patient/entities/patient.entity';

@Injectable()
export class MetricService {
  constructor(
    @InjectRepository(Metric)
    private readonly metricRepository: Repository<Metric>,
    @InjectRepository(Patient) // Inject Patient repository to find the patient
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(patientId: string, value: number, type: MetricType): Promise<Metric> {
    const patient = await this.patientRepository.findOneBy({ id: patientId });
    if (!patient) {
      throw new Error('Patient not found');
    }
    const newMetric = this.metricRepository.create({ patient, value, type });
    return this.metricRepository.save(newMetric);
  }

  async findAllForPatient(patientId: string): Promise<Metric[]> {
    return this.metricRepository.find({
      where: { patient: { id: patientId } },
      order: { recordedAt: 'DESC' },
    });
  }
}
