import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id/details')
  findDetails(@Param('id') id: string) {
    return this.patientService.findDetailsById(id);
  }
  
  // This endpoint would typically be called after WeChat login
  @Post('login')
  login(@Body('openId') openId: string) {
    if (!openId) {
      // In a real app, you'd handle this error more gracefully
      throw new Error('openId is required');
    }
    return this.patientService.findOrCreateByOpenId(openId);
  }
}
