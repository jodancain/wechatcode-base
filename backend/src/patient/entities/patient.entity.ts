import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  wechatOpenId: string; // For simplicity, we use openId as the unique identifier

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @CreateDateColumn()
  createdAt: Date;
}
