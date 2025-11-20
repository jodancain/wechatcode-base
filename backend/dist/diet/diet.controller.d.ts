import { DietService } from './diet.service';
import { DietTrafficLight } from './entities/diet.entity';
declare class CreateDietDto {
    patientId: string;
    trafficLight: DietTrafficLight;
    description: string;
}
export declare class DietController {
    private readonly dietService;
    constructor(dietService: DietService);
    create(createDietDto: CreateDietDto): Promise<import("./entities/diet.entity").Diet>;
    findAllForPatient(patientId: string): Promise<import("./entities/diet.entity").Diet[]>;
}
export {};
