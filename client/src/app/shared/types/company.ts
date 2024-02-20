import { IArticle } from './article';
import { IJob } from './job';

export interface ICompany {
  id: string;
  name: string;
  jobs: IJob[];
  articles: IArticle[];
  userId: string;
  shortDescription: string;
  fullDescription: string;
  logoUrl: string;
  bulgariaFrom: number;
  worldFrom: number;
  bulgariaLocation: string;
  worldLocation: string;
  foundedIn: number;
  employeesCount: number;
  address: string;
  email: string;
  legalName: string;
}
