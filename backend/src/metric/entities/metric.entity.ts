import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';

export enum MetricType {
  URIC_ACID = 'uric_acid',
  WEIGHT = 'weight',
}

@Entity('metrics')
export class Metric {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column({
    type: 'enum',
    enum: MetricType,
    default: MetricType.URIC_ACID,
  })
  type: MetricType;

  @Column('float')
  value: number;
  
  @CreateDateColumn()
  recordedAt: Date;
}
