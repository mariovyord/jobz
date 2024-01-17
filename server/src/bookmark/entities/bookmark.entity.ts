import { Job } from 'src/job/entities/job.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@Index('unique_job_userId', ['job', 'userId'], { unique: true })
export class Bookmark {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Job)
  @JoinColumn()
  job: Job;

  @Column({ type: 'varchar', length: 200 })
  userId: string;
}
