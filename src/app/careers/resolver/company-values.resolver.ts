import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CompanyValue } from '../model/company-value';
import { Observable } from 'rxjs/Observable';
import { CompanyValueService } from '../service/company-value.service';

@Injectable()
export class CompanyValuesResolver implements Resolve<CompanyValue[]> {

  constructor(private companyValueService: CompanyValueService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      CompanyValue[] | Observable<CompanyValue[]> | Promise<CompanyValue[]> {
    return this.companyValueService.getCompanyValues();
  }
}
