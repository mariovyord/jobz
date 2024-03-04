import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthzModule } from './authz/authz.module';
import { JobModule } from './features/job/job.module';
import { CompanyModule } from './features/company/company.module';
import { ArticleModule } from './features/article/article.module';
import { JobApplicationModule } from './features/job-application/job-application.module';
import { FilterModule } from './features/filter/filter.module';
import { BookmarkModule } from './features/bookmark/bookmark.module';
import { AccountModule } from './features/account/account.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    AuthzModule,
    FilterModule,
    JobModule,
    CompanyModule,
    ArticleModule,
    JobApplicationModule,
    TypeOrmModule.forRoot(databaseConfig),
    BookmarkModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
