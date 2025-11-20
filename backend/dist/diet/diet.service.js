"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diet_entity_1 = require("./entities/diet.entity");
const patient_entity_1 = require("../patient/entities/patient.entity");
let DietService = class DietService {
    dietRepository;
    patientRepository;
    constructor(dietRepository, patientRepository) {
        this.dietRepository = dietRepository;
        this.patientRepository = patientRepository;
    }
    async create(patientId, trafficLight, description) {
        const patient = await this.patientRepository.findOneBy({ id: patientId });
        if (!patient) {
            throw new Error('Patient not found');
        }
        const newDiet = this.dietRepository.create({ patient, trafficLight, description });
        return this.dietRepository.save(newDiet);
    }
    async findAllForPatient(patientId) {
        return this.dietRepository.find({
            where: { patient: { id: patientId } },
            order: { recordedAt: 'DESC' },
        });
    }
};
exports.DietService = DietService;
exports.DietService = DietService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diet_entity_1.Diet)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], DietService);
//# sourceMappingURL=diet.service.js.map