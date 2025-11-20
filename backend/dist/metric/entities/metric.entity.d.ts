import { Patient } from '../../patient/entities/patient.entity';
export declare enum MetricType {
    URIC_ACID = "uric_acid",
    WEIGHT = "weight"
}
export declare class Metric {
    id: string;
    patient: Patient;
    type: MetricType;
    value: number;
    recordedAt: Date;
}
