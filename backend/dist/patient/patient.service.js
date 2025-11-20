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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patient_entity_1 = require("./entities/patient.entity");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const metric_entity_1 = require("../metric/entities/metric.entity");
const diet_entity_1 = require("../diet/entities/diet.entity");
const AI_SERVICE_URL = 'http://localhost:8000';
let PatientService = class PatientService {
    patientRepository;
    metricRepository;
    dietRepository;
    httpService;
    constructor(patientRepository, metricRepository, dietRepository, httpService) {
        this.patientRepository = patientRepository;
        this.metricRepository = metricRepository;
        this.dietRepository = dietRepository;
        this.httpService = httpService;
    }
    async findOrCreateByOpenId(openId) {
        let patient = await this.patientRepository.findOne({ where: { wechatOpenId: openId } });
        if (!patient) {
            patient = this.patientRepository.create({ wechatOpenId: openId });
            await this.patientRepository.save(patient);
        }
        return patient;
    }
    async findAll() {
        return this.patientRepository.find();
    }
    async findDetailsById(id) {
        const patient = await this.patientRepository.findOneBy({ id });
        if (!patient) {
            throw new Error('Patient not found');
        }
        const metrics = await this.metricRepository.find({ where: { patient: { id } }, order: { recordedAt: 'DESC' } });
        const diets = await this.dietRepository.find({ where: { patient: { id } }, order: { recordedAt: 'DESC' } });
        let riskAnalysis = { riskLevel: 'N/A', message: 'AI service unavailable' };
        try {
            const aiResponse = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${AI_SERVICE_URL}/analyze-risk`, { metrics, diets }));
            riskAnalysis = aiResponse.data;
        }
        catch (error) {
            console.error('Could not connect to AI service:', error.message);
        }
        return {
            ...patient,
            metrics,
            diets,
            riskAnalysis,
        };
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.Patient)),
    __param(1, (0, typeorm_1.InjectRepository)(metric_entity_1.Metric)),
    __param(2, (0, typeorm_1.InjectRepository)(diet_entity_1.Diet)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _d : Object])
], PatientService);
//# sourceMappingURL=patient.service.js.map