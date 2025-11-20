import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MetricService } from './metric.service';
import { MetricType } from './entities/metric.entity';

class CreateMetricDto {
  patientId: string;
  value: number;
  type: MetricType;
}

@Controller('metrics')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    const { patientId, value, type } = createMetricDto;
    return this.metricService.create(patientId, value, type);
  }

  @Get('patient/:patientId')
  findAllForPatient(@Param('patientId') patientId: string) {
    return this.metricService.findAllForPatient(patientId);
  }
}
