import { Repository } from 'typeorm';
import { Patient } from './entities/patient.entity';
import { HttpService } from '@nestjs/axios';
import { Metric } from '../metric/entities/metric.entity';
import { Diet } from '../diet/entities/diet.entity';
export declare class PatientService {
    private readonly patientRepository;
    private readonly metricRepository;
    private readonly dietRepository;
    private readonly httpService;
    constructor(patientRepository: Repository<Patient>, metricRepository: Repository<Metric>, dietRepository: Repository<Diet>, httpService: HttpService);
    findOrCreateByOpenId(openId: string): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findDetailsById(id: string): Promise<any>;
}
