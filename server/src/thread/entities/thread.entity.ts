import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 2000 })
  content: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  image: string;

  @Column({ type: 'varchar' })
  owner: string;
}
