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

  @Column({ type: 'varchar', length: 200 })
  title: string;

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

  /**
   * Content (description) of the job posting in html format
   */
  @Column({ type: 'varchar', length: 4000 })
  description: string;

  /**
   * The work field, meaning the type of it
   *
   * @example front-end, back-end, full-stack, sys-admin, etc.
   */
  @Column({ type: 'varchar', length: 200 })
  field: string;

  /**
   * City where work is located
   *
   * @example Sofia, Varna, Ruse, etc.
   */
  @Column({ type: 'varchar', length: 200 })
  location: string;

  /**
   * Level in the company hierarchy
   *
   * @example junior-level, mid-level, senior-level, management, senior-management
   */
  @Column({ type: 'varchar', length: 200 })
  level: string;

  /**
   * Is the job remote?
   *
   * @example office, remote, hybrid
   */
  @Column({ type: 'varchar', length: 200 })
  remote: string;

  /**
   * Employment type
   *
   * @example full-time, part-time, freelance, internship
   */
  @Column({ type: 'varchar', length: 200 })
  employmentType: string;

  /**
   * Type of interview
   *
   * @example office, remote
   */
  @Column({ type: 'varchar', length: 200 })
  interview: string;

  @Column({ type: 'varchar', length: 500 })
  imageUrl: string;
}
