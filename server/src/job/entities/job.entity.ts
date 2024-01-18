import { Company } from 'src/company/entities/company.entity';
import { Filter } from 'src/filter/entities/filter.entity';
import { JobApplication } from 'src/job-application/entities/job-application.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  companyId: string;

  @ManyToOne(() => Company, (c) => c.jobs)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToMany(() => Filter)
  @JoinTable({
    name: 'job_filters',
    joinColumn: { name: 'jobId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'filterId', referencedColumnName: 'id' },
  })
  filters: Filter[];

  @ManyToOne(() => JobApplication, (j) => j.job)
  jobApplications: JobApplication[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
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
