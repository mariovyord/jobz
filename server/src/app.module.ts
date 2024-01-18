import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthzModule } from './authz/authz.module';
import { JobModule } from './job/job.module';
import { CompanyModule } from './company/company.module';
import { ArticleModule } from './article/article.module';
import { JobApplicationModule } from './job-application/job-application.module';
import { FilterModule } from './filter/filter.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AccountModule } from './account/account.module';
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
