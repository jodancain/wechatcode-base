import { Repository } from 'typeorm';
import { Metric, MetricType } from './entities/metric.entity';
import { Patient } from '../patient/entities/patient.entity';
export declare class MetricService {
    private readonly metricRepository;
    private readonly patientRepository;
    constructor(metricRepository: Repository<Metric>, patientRepository: Repository<Patient>);
    create(patientId: string, value: number, type: MetricType): Promise<Metric>;
    findAllForPatient(patientId: string): Promise<Metric[]>;
}
