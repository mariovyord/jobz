import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  autoLoadEntities: true,
  database: 'jobz',
  logging: true,
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export default databaseConfig;
