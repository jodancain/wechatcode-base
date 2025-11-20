import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diet } from './entities/diet.entity';
import { DietService } from './diet.service';
import { DietController } from './diet.controller';
import { Patient } from '../patient/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diet, Patient])],
  providers: [DietService],
  controllers: [DietController],
})
export class DietModule {}
