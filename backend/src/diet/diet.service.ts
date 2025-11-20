import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diet, DietTrafficLight } from './entities/diet.entity';
import { Patient } from '../patient/entities/patient.entity';

@Injectable()
export class DietService {
  constructor(
    @InjectRepository(Diet)
    private readonly dietRepository: Repository<Diet>,
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
  ) {}

  async create(patientId: string, trafficLight: DietTrafficLight, description: string): Promise<Diet> {
    const patient = await this.patientRepository.findOneBy({ id: patientId });
    if (!patient) {
      throw new Error('Patient not found');
    }
    const newDiet = this.dietRepository.create({ patient, trafficLight, description });
    return this.dietRepository.save(newDiet);
  }

  async findAllForPatient(patientId: string): Promise<Diet[]> {
    return this.dietRepository.find({
      where: { patient: { id: patientId } },
      order: { recordedAt: 'DESC' },
    });
  }
}
