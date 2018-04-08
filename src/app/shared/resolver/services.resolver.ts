import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Service } from '../model/service';
import { ServiceService } from '../service/service.service';

@Injectable()
export class ServicesResolver implements Resolve<Service[]> {
  constructor(private serviceService: ServiceService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Service[] | Observable<Service[]> |
                                                     Promise<Service[]> {
    return this.serviceService.getExpertises();
  }
}
