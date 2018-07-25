import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OpenPosition } from '../../shared/model/open-position';
import { OpenPositionService } from '../../shared/service/open-position.service';

@Injectable()
export class OpenPositionResolver implements Resolve<OpenPosition> {

  constructor(private openPositionService: OpenPositionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      OpenPosition | Observable<OpenPosition> | Promise<OpenPosition> {
    return this.openPositionService.getOpenPosition(route.params.id);
  }
}
