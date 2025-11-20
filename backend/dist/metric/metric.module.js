"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const metric_entity_1 = require("./entities/metric.entity");
const metric_service_1 = require("./metric.service");
const metric_controller_1 = require("./metric.controller");
const patient_entity_1 = require("../patient/entities/patient.entity");
let MetricModule = class MetricModule {
};
exports.MetricModule = MetricModule;
exports.MetricModule = MetricModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([metric_entity_1.Metric, patient_entity_1.Patient])],
        providers: [metric_service_1.MetricService],
        controllers: [metric_controller_1.MetricController],
    })
], MetricModule);
//# sourceMappingURL=metric.module.js.map