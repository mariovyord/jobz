import { IFilter } from 'src/shared/interfaces/filter';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Filter implements IFilter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  type: string;
}
