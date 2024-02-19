import { Repository, SelectQueryBuilder } from 'typeorm';

export interface IQuery {
  where?: string | string[];
}

export class CustomQueryBuilder<T> {
  private queryBuilder: SelectQueryBuilder<T>;

  constructor(repository: Repository<T>) {
    this.queryBuilder = repository.createQueryBuilder('entity');
  }

  public where(query: IQuery['where']): this {
    if (!query) {
      return this;
    }

    if (Array.isArray(query)) {
      query.forEach((condition) => {
        const [field, value] = condition.split('=');
        this.queryBuilder = this.queryBuilder.andWhere({ [field]: value });
      });
    } else {
      const [field, value] = query.split('=');
      this.queryBuilder = this.queryBuilder.where({ [field]: value });
    }

    return this;
  }

  public innerJoinAndSelect(entity: string): this {
    this.queryBuilder.innerJoinAndSelect(`entity.${entity}`, entity);
    return this;
  }

  public exec(): Promise<T[]> {
    return this.queryBuilder.getMany();
  }
}
