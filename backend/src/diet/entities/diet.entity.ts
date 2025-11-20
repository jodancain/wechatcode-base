import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';

// Traffic light system for diet
export enum DietTrafficLight {
  GREEN = 'green',   // Recommended
  YELLOW = 'yellow', // In moderation
  RED = 'red',     // Avoid
}

@Entity('diets')
export class Diet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Patient)
  patient: Patient;

  @Column({
    type: 'enum',
    enum: DietTrafficLight,
  })
  trafficLight: DietTrafficLight;
  
  @Column('text', { nullable: true })
  description: string; // e.g., "Seafood hotpot"

  @CreateDateColumn()
  recordedAt: Date;
}
