import { Job } from 'src/job/entities/job.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Job, (j) => j.company)
  jobs: Job[];

  @Column({ type: 'varchar', length: 300 })
  owner: string;

  @Column({ type: 'varchar', length: 300 })
  shortDescription: string;

  @Column({ type: 'varchar', length: 2000 })
  fullDescription: string;

  @Column({ type: 'varchar', length: 500 })
  logoUrl: string;

  @Column({ type: 'int' })
  bulgariaFrom: number;

  @Column({ type: 'int' })
  worldFrom: number;

  @Column({ type: 'varchar', length: 100 })
  bulgariaLocation: string;

  @Column({ type: 'varchar', length: 100 })
  worldLocation: string;

  @Column({ type: 'int' })
  foundedIn: number;

  @Column({ type: 'int' })
  employeesCount: number;

  @Column({ type: 'varchar', length: 500 })
  address: string;

  @Column({ type: 'varchar', length: 200 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  legalName: string;
}
