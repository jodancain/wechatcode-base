import { MetricService } from './metric.service';
import { MetricType } from './entities/metric.entity';
declare class CreateMetricDto {
    patientId: string;
    value: number;
    type: MetricType;
}
export declare class MetricController {
    private readonly metricService;
    constructor(metricService: MetricService);
    create(createMetricDto: CreateMetricDto): Promise<import("./entities/metric.entity").Metric>;
    findAllForPatient(patientId: string): Promise<import("./entities/metric.entity").Metric[]>;
}
export {};
