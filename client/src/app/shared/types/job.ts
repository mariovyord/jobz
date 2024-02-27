import { ICompany } from './company';
import { IFilter } from './filter';
import { IJobApplication } from './job-application';

export interface IJob {
  id: string;
  title: string;
  companyId: string;
  company: ICompany;
  filters: IFilter[];
  jobApplications: IJobApplication[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  jobField: TField;
  location: string;
  language: TLanguage[];
  techStack: TTech[];
  experience: TExperience;
  level: TLevel;
  remoteOptions: TRemoteOptions;
  employmentType: TEmploymentType;
  interviewType: TInterview;
  imageUrl: string;
}

export type TExperience = '0-2-years' | '3-5-years' | '5+-years';

export type TLevel =
  | 'junior'
  | 'mid-level'
  | 'senior-level'
  | 'management'
  | 'senior-management';

export type TRemoteOptions = 'office' | 'remote' | 'hybrid';

export type TInterview = 'on-site' | 'phone' | 'online';

export type TEmploymentType =
  | 'full-time'
  | 'part-time'
  | 'freelance'
  | 'internship';

export type TField =
  | 'it-senior-management'
  | 'ui-ux-creative'
  | 'system-administration'
  | 'web'
  | 'gaming'
  | 'front-end'
  | 'full-stack'
  | 'back-end'
  | 'test-qa'
  | 'customer-support'
  | 'mobile'
  | 'desktop'
  | 'cloud'
  | 'embedded'
  | 'network-administration'
  | 'devops'
  | 'security'
  | 'dba-big-data'
  | 'data-science'
  | 'bi-erp-crm'
  | 'pm-po-ba'
  | 'hardware'
  | 'tech-support'
  | 'sales'
  | 'marketing-seo'
  | 'it-recruitment-hr'
  | 'it-architecture'
  | 'team-lead';

export type TTech =
  | 'javascript'
  | 'python'
  | 'java'
  | 'c'
  | 'c++'
  | 'c#'
  | 'ruby'
  | 'swift'
  | 'kotlin'
  | 'typescript'
  | 'php'
  | 'html-css'
  | 'go'
  | 'rust'
  | 'scala'
  | 'r'
  | 'shell'
  | 'perl'
  | 'objective-c'
  | 'groovy';

export type TLanguage =
  | 'english'
  | 'spanish'
  | 'chinese'
  | 'hindi'
  | 'arabic'
  | 'portuguese'
  | 'bengali'
  | 'russian'
  | 'french'
  | 'urdu';
