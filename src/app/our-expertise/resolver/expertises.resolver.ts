import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ExpertiseService } from '../service/expertise.service';
import { Expertise } from '../model/expertise';

@Injectable()
export class ExpertisesResolver implements Resolve<Expertise[]> {
  constructor(private expertiseService: ExpertiseService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Expertise[] | Observable<Expertise[]> |
                                                     Promise<Expertise[]> {
    return this.expertiseService.getExpertises();
  }
}
