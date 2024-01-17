import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Unique(['userId'])
@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  firstName: string;

  @Column({ type: 'varchar', length: 200 })
  lastName: string;

  @Column({ type: 'varchar', length: 500 })
  cvUrl: string;

  @Column({ type: 'varchar', length: 300 })
  userId: string;
}
