import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OpenPosition } from '../../shared/model/open-position';
import { OpenPositionService } from '../../shared/service/open-position.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class FeaturedOpenPositionsResolver implements Resolve<OpenPosition[]> {
  constructor(private openPositionService: OpenPositionService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): OpenPosition[] | Observable<OpenPosition[]> | Promise<OpenPosition[]> {
    return this.openPositionService
      .getOpenPositions()
      .map(featuredOpenPositions =>
        featuredOpenPositions.filter(
          featuredOpenPosition =>
            featuredOpenPosition.title === 'Data Architect' ||
            featuredOpenPosition.title === 'Application Architect' ||
            featuredOpenPosition.title === 'Senior Software Engineer'
        )
      )
      .catch(error => {
        return Observable.of(null);
      });
  }
}
