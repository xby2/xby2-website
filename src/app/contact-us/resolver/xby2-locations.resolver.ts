import { Injectable } from '@angular/core';
import { Xby2Location } from '../../shared/model/xby2-location';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Xby2LocationService } from '../../shared/footer/service/xby2-location.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Xby2LocationsResolver implements Resolve<Xby2Location[]> {
  constructor(private xby2LocationService: Xby2LocationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Xby2Location[] | Observable<Xby2Location[]> | Promise<Xby2Location[]> {
    return this.xby2LocationService.getXby2Locations();
  }
}
