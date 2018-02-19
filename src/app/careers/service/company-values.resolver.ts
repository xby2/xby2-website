import { Injectable } from '@angular/core';
import { CompanyValueService } from './company-value.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CompanyValue } from '../model/company-value';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyValuesResolver implements Resolve<CompanyValue[]> {

  constructor(private companyValueService: CompanyValueService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      CompanyValue[] | Observable<CompanyValue[]> | Promise<CompanyValue[]> {
    return this.companyValueService.getCompanyValues();
  }
}
