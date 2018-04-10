import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MindShare } from '../../our-thoughts/service/mind-share';
import { MindShareService } from '../../our-thoughts/service/mind-share.service';
import { OpenPosition } from '../../shared/model/open-position';
import { OpenPositionService } from '../../shared/service/open-position.service';

@Injectable()
export class FeaturedOpenPositionsResolver implements Resolve<OpenPosition[]> {
  constructor(private openPositionService: OpenPositionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      OpenPosition[] | Observable<OpenPosition[]> | Promise<OpenPosition[]> {
    return this.openPositionService.getOpenPositions()
                .map(featuredOpenPositions =>
                     featuredOpenPositions.filter(
                       featuredOpenPosition =>
                        featuredOpenPosition.title === 'Data Architect' ||
                        featuredOpenPosition.title === 'Application Architect' ||
                        featuredOpenPosition.title === 'Senior Software Engineer'));
  }
}
