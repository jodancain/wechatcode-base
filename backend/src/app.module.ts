import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { MetricModule } from './metric/metric.module';
import { DietModule } from './diet/diet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'gout_helper_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // DEV only, do not use in production
    }),
    PatientModule,
    MetricModule,
    DietModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
