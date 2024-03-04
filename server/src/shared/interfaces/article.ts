import { ICompany } from './company';

export interface IArticle {
  id: string;
  companyId: string;
  company: ICompany;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
