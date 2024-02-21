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
import {
  IJob,
  TEmploymentType,
  TExperience,
  TField,
  TInterview,
  TLanguage,
  TLevel,
  TRemote,
  TTech,
} from '../types/job';

@Entity()
export class Job implements IJob {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
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
  field: TField;

  /**
   * City where work is located
   *
   * @example Sofia, Varna, Ruse, etc.
   */
  @Column({ type: 'varchar', length: 200 })
  location: string;

  /**
   * Array of languages
   *
   * @example ['english', 'bulgarian']
   */
  @Column('varchar', { array: true, default: [] })
  language: TLanguage[];

  /**
   * Array of programming languages
   *
   * @example ['go', 'javascript']
   */
  @Column('varchar', { array: true, default: [] })
  techStack: TTech[];

  /**
   * Years of expirience
   *
   * @example '0-2-years', '3-5-years', '5+-years'
   */
  @Column({ type: 'varchar', length: 200, nullable: true })
  experience: TExperience;

  /**
   * Level in the company hierarchy
   *
   * @example junior-level, mid-level, senior-level, management, senior-management
   */
  @Column({ type: 'varchar', length: 200 })
  level: TLevel;

  /**
   * Is the job remote?
   *
   * @example office, remote, hybrid
   */
  @Column({ type: 'varchar', length: 200 })
  remote: TRemote;

  /**
   * Employment type
   *
   * @example full-time, part-time, freelance, internship
   */
  @Column({ type: 'varchar', length: 200 })
  employmentType: TEmploymentType;

  /**
   * Type of interview
   *
   * @example office, remote
   */
  @Column({ type: 'varchar', length: 200 })
  interview: TInterview;

  @Column({ type: 'varchar', length: 500 })
  imageUrl: string;
}
