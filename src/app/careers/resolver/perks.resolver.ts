import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Perk } from '../model/perk';
import { PerkService } from '../service/perk.service';

@Injectable()
export class PerksResolver implements Resolve<Perk[]> {
  constructor(private perkService: PerkService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Perk[] | Observable<Perk[]> | Promise<Perk[]> {
    return this.perkService.getPerks();
  }
}
