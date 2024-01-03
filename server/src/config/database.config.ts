import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 6543,
  password: '123123',
  username: 'postgres',
  autoLoadEntities: true,
  database: 'postit',
  synchronize: true,
  logging: true,
};

export default databaseConfig;
