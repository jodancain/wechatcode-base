"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const diet_entity_1 = require("./entities/diet.entity");
const diet_service_1 = require("./diet.service");
const diet_controller_1 = require("./diet.controller");
const patient_entity_1 = require("../patient/entities/patient.entity");
let DietModule = class DietModule {
};
exports.DietModule = DietModule;
exports.DietModule = DietModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diet_entity_1.Diet, patient_entity_1.Patient])],
        providers: [diet_service_1.DietService],
        controllers: [diet_controller_1.DietController],
    })
], DietModule);
//# sourceMappingURL=diet.module.js.map