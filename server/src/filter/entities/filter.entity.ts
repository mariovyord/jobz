import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Filter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  type: string;
}
