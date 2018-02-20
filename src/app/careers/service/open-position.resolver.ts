import { Injectable } from '@angular/core';
import { OpenPosition } from '../model/open-position';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OpenPositionResolver implements Resolve<OpenPosition> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      OpenPosition | Observable<OpenPosition> | Promise<OpenPosition> {
    throw new Error("Method not implemented.");
  }
}
