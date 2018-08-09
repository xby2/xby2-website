import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OpenPosition } from '../../shared/model/open-position';
import { OpenPositionService } from '../../shared/service/open-position.service';


import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FeaturedOpenPositionsResolver implements Resolve<OpenPosition[]> {
  constructor(private openPositionService: OpenPositionService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): OpenPosition[] | Observable<OpenPosition[]> | Promise<OpenPosition[]> {
    return this.openPositionService.getOpenPositions().pipe(
      map(featuredOpenPositions =>
        featuredOpenPositions.filter(
          featuredOpenPosition =>
            featuredOpenPosition.title === 'Data Architect' ||
            featuredOpenPosition.title === 'Application Architect' ||
            featuredOpenPosition.title === 'Senior Software Engineer'
        )
      ),
      catchError(error => {
        return of(null);
      })
    );
  }
}
