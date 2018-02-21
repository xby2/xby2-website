import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OpenPosition } from '../model/open-position';
import { OpenPositionService } from '../service/open-position.service';

@Injectable()
export class OpenPositionsResolver implements Resolve<OpenPosition[]> {
  constructor(private openPositionService: OpenPositionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      OpenPosition[] | Observable<OpenPosition[]> | Promise<OpenPosition[]> {
    return this.openPositionService.getOpenPositions();
  }
}
