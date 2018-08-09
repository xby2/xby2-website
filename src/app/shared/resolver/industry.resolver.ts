import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IndustryService } from '../service/industry.service';
import { Industry } from '../model/industry';

@Injectable()
export class IndustryResolver implements Resolve<Industry[]> {
  constructor(private industryService: IndustryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Industry[] | Observable<Industry[]> | Promise<Industry[]> {
    return this.industryService.getIndustries();
  }
}
