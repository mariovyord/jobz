import { Company } from 'src/company/entities/company.entity';
import { Filter } from 'src/filter/entities/filter.entity';
import { JobApplication } from 'src/job-application/entities/job-application.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (c) => c.jobs)
  company: Company;

  @ManyToMany(() => Filter)
  @JoinTable()
  filters: Filter[];

  @ManyToOne(() => JobApplication, (j) => j.job)
  jobApplications: JobApplication[];

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 4000 })
  content: string;

  @Column({ type: 'varchar', length: 200 })
  domain: string;

  @Column({ type: 'varchar', length: 200 })
  location: string;

  @Column({ type: 'varchar', length: 200 })
  level: string;

  @Column({ type: 'varchar', length: 200 })
  remote: string;

  @Column({ type: 'varchar', length: 200 })
  type: string;

  @Column({ type: 'varchar', length: 200 })
  hours: string;

  @Column({ type: 'varchar', length: 200 })
  interview: string;

  @Column({ type: 'varchar', length: 500 })
  imageUrl: string;
}
