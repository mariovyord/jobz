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
  content: string;
  domain: string;
  location: string;
  level: string;
  remote: string;
  type: string;
  hours: string;
  interview: string;
  imageUrl: string;
}
