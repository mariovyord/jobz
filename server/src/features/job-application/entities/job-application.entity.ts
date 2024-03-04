import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Job } from 'src/features/job/entities/job.entity';
import { IJobApplication } from 'src/shared/interfaces/job-application';

@Entity()
export class JobApplication implements IJobApplication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  userId: string;

  @ManyToOne(() => Job, (job) => job.jobApplications)
  @JoinColumn({ name: 'jobId' })
  job: Job;
}
