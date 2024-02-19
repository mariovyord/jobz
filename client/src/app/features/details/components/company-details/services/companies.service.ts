import { Injectable } from '@angular/core';
import { DataService } from '../../../../../core/services/api/data.service';
import { ICompany } from '../../../../../shared/types/company';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService extends DataService<ICompany> {
  private companiesCache = new Map();

  override getPath(): string {
    return 'company';
  }

  public getAllCompanies$() {
    return this.getAll$().pipe(
      tap((j) => {
        j.forEach((v: ICompany) => {
          this.companiesCache.set(v.id, v);
        });
      })
    );
  }

  public getCompanyById$(companyId: string | null) {
    if (!companyId) {
      throw new Error('Company ID is invalid');
    }

    const cached = this.companiesCache.get(companyId);

    if (cached) {
      return of(cached);
    }

    return this.getOne$(companyId).pipe(
      tap((c) => {
        this.companiesCache.set(companyId, c);
      })
    );
  }
}
