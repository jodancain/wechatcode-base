import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { HttpModule } from '@nestjs/axios';
import { Metric } from '../metric/entities/metric.entity';
import { Diet } from '../diet/entities/diet.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Patient, Metric, Diet]),
    HttpModule
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
