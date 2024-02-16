import { Injectable } from '@angular/core';
import { DataService } from '../../../core/services/api/data.service';
import { ICompany } from '../../../shared/types/company';

@Injectable()
export class CompaniesService extends DataService<ICompany> {
  override getPath(): string {
    return 'company';
  }

  public getAllCompanies$() {
    return this.getAll$();
  }

  public getCompanyById(id: string) {
    return this.getOne$(id);
  }
}
