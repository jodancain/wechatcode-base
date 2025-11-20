import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './entities/metric.entity';
import { MetricService } from './metric.service';
import { MetricController } from './metric.controller';
import { Patient } from '../patient/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Metric, Patient])],
  providers: [MetricService],
  controllers: [MetricController],
})
export class MetricModule {}
