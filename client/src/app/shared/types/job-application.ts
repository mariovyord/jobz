import { IJob } from './job';

export interface IJobApplication {
  id: string;
  userId: string;
  job: IJob;
}
