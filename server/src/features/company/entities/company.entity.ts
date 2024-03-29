import { Article } from 'src/features/article/entities/article.entity';
import { Job } from 'src/features/job/entities/job.entity';
import { ICompany } from 'src/shared/interfaces/company';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company implements ICompany {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Job, (j) => j.company)
  jobs: Job[];

  @OneToMany(() => Article, (j) => j.company)
  articles: Article[];

  @Column({ type: 'varchar', length: 300 })
  userId: string;

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

  @Column({ type: 'varchar', length: 200 })
  bulgariaLocation: string;

  @Column({ type: 'varchar', length: 200 })
  worldLocation: string;

  @Column({ type: 'int' })
  foundedIn: number;

  @Column({ type: 'int' })
  employeesCount: number;

  @Column({ type: 'varchar', length: 500 })
  address: string;

  @Column({ type: 'varchar', length: 200 })
  email: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  legalName: string;
}
