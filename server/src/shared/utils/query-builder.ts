import { Repository, SelectQueryBuilder } from 'typeorm';

export interface IQuery {
  where?: string | string[];
}

export function buildQuery<T>(
  repository: Repository<T>,
  query: IQuery,
): SelectQueryBuilder<T> {
  let queryBuilder = repository.createQueryBuilder('entity');

  if (query.where) {
    console.log(query.where);
    debugger;
    if (Array.isArray(query.where)) {
      query.where.forEach((condition: string) => {
        const [cond, value] = condition.split('=');
        queryBuilder = queryBuilder.andWhere({ [cond]: value });
      });
    } else {
      const [cond, value] = query.where.split('=');
      queryBuilder = queryBuilder.where({ [cond]: value });
    }
  }

  return queryBuilder;
}
