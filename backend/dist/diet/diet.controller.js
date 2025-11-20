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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DietController = void 0;
const common_1 = require("@nestjs/common");
const diet_service_1 = require("./diet.service");
class CreateDietDto {
    patientId;
    trafficLight;
    description;
}
let DietController = class DietController {
    dietService;
    constructor(dietService) {
        this.dietService = dietService;
    }
    create(createDietDto) {
        const { patientId, trafficLight, description } = createDietDto;
        return this.dietService.create(patientId, trafficLight, description);
    }
    findAllForPatient(patientId) {
        return this.dietService.findAllForPatient(patientId);
    }
};
exports.DietController = DietController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDietDto]),
    __metadata("design:returntype", void 0)
], DietController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('patient/:patientId'),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DietController.prototype, "findAllForPatient", null);
exports.DietController = DietController = __decorate([
    (0, common_1.Controller)('diets'),
    __metadata("design:paramtypes", [diet_service_1.DietService])
], DietController);
//# sourceMappingURL=diet.controller.js.map