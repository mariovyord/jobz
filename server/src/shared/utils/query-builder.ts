import { Repository, SelectQueryBuilder } from 'typeorm';

export interface IQueryParams {
  whereIn?: Record<string, string[]>;
  whereEq?: Record<string, string>;
  orderBy?: string;
}

export class CustomQueryBuilder<T> {
  private queryBuilder: SelectQueryBuilder<T>;

  constructor(repository: Repository<T>) {
    this.queryBuilder = repository.createQueryBuilder('entity');
  }

  public whereIn(where: IQueryParams['whereIn']): this {
    if (!where) {
      return this;
    }

    Object.entries(where).forEach(([key, values]) => {
      // Use IN clause for multiple mathing patterns
      this.queryBuilder.andWhere(`entity.${key} IN (:...values)`, {
        values: values,
      });
    });

    return this;
  }

  public whereEq(where: IQueryParams['whereEq']): this {
    if (!where) {
      return this;
    }

    Object.entries(where).forEach(([key, values]) => {
      // Use equality for single matching pattern
      this.queryBuilder.andWhere(`entity.${key} = :value`, {
        value: values,
      });
    });

    return this;
  }

  public innerJoinAndSelect(entity: string): this {
    this.queryBuilder.innerJoinAndSelect(`entity.${entity}`, entity);
    return this;
  }

  public orderBy(property: string, order: 'DESC' | 'ASC'): this {
    this.queryBuilder.orderBy(`entity.${property}`, order);
    return this;
  }

  public exec(): Promise<T[]> {
    return this.queryBuilder.getMany();
  }
}
