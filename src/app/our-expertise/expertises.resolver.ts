import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ExpertiseService } from '../our-expertise/expertise.service';
import { Expertise } from '../our-expertise/expertise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpertisesResolver implements Resolve<Expertise[]> {
  constructor(private expertiseService: ExpertiseService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Expertise[] | Observable<Expertise[]> |
                                                     Promise<Expertise[]> {
    return this.expertiseService.getExpertises();
  }
}
