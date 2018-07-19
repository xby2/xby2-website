import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecruitingValue } from '../model/recruiting-value';
import { Observable } from 'rxjs/Observable';
import { RecruitingValueService } from '../service/recruiting-value.service';

@Injectable()
export class RecruitingValuesResolver implements Resolve<RecruitingValue[]> {

  constructor(private companyValueService: RecruitingValueService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      RecruitingValue[] | Observable<RecruitingValue[]> | Promise<RecruitingValue[]> {
    return this.companyValueService.getCompanyValues();
  }
}
