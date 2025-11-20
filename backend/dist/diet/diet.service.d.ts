import { Repository } from 'typeorm';
import { Diet, DietTrafficLight } from './entities/diet.entity';
import { Patient } from '../patient/entities/patient.entity';
export declare class DietService {
    private readonly dietRepository;
    private readonly patientRepository;
    constructor(dietRepository: Repository<Diet>, patientRepository: Repository<Patient>);
    create(patientId: string, trafficLight: DietTrafficLight, description: string): Promise<Diet>;
    findAllForPatient(patientId: string): Promise<Diet[]>;
}
