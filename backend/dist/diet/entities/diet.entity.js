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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diet = exports.DietTrafficLight = void 0;
const typeorm_1 = require("typeorm");
const patient_entity_1 = require("../../patient/entities/patient.entity");
var DietTrafficLight;
(function (DietTrafficLight) {
    DietTrafficLight["GREEN"] = "green";
    DietTrafficLight["YELLOW"] = "yellow";
    DietTrafficLight["RED"] = "red";
})(DietTrafficLight || (exports.DietTrafficLight = DietTrafficLight = {}));
let Diet = class Diet {
    id;
    patient;
    trafficLight;
    description;
    recordedAt;
};
exports.Diet = Diet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Diet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_entity_1.Patient),
    __metadata("design:type", patient_entity_1.Patient)
], Diet.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: DietTrafficLight,
    }),
    __metadata("design:type", String)
], Diet.prototype, "trafficLight", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Diet.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Diet.prototype, "recordedAt", void 0);
exports.Diet = Diet = __decorate([
    (0, typeorm_1.Entity)('diets')
], Diet);
//# sourceMappingURL=diet.entity.js.map