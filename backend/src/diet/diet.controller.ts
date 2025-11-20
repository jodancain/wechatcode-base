import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DietService } from './diet.service';
import { DietTrafficLight } from './entities/diet.entity';

class CreateDietDto {
  patientId: string;
  trafficLight: DietTrafficLight;
  description: string;
}

@Controller('diets')
export class DietController {
  constructor(private readonly dietService: DietService) {}

  @Post()
  create(@Body() createDietDto: CreateDietDto) {
    const { patientId, trafficLight, description } = createDietDto;
    return this.dietService.create(patientId, trafficLight, description);
  }

  @Get('patient/:patientId')
  findAllForPatient(@Param('patientId') patientId: string) {
    return this.dietService.findAllForPatient(patientId);
  }
}
