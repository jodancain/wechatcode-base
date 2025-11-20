import { Patient } from '../../patient/entities/patient.entity';
export declare enum DietTrafficLight {
    GREEN = "green",
    YELLOW = "yellow",
    RED = "red"
}
export declare class Diet {
    id: string;
    patient: Patient;
    trafficLight: DietTrafficLight;
    description: string;
    recordedAt: Date;
}
