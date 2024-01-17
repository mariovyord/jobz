import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Job } from 'src/job/entities/job.entity';

@Entity()
export class JobApplication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  user_id: string;

  @ManyToOne(() => Job, (job) => job.jobApplications)
  @JoinColumn({ name: 'jobId' })
  job: Job;
}
