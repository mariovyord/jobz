import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 1000 })
  content: string;

  @Column()
  owner: string;

  @Column()
  thread: string;

  @OneToOne(() => Comment, { nullable: true })
  @JoinColumn()
  parent: string;
}
