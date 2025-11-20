import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    findAll(): Promise<import("./entities/patient.entity").Patient[]>;
    findDetails(id: string): Promise<any>;
    login(openId: string): Promise<import("./entities/patient.entity").Patient>;
}
