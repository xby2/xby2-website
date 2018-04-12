import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MindShareService } from '../../shared/service/mind-share.service';
import { MindShare } from '../../shared/model/mind-share';

@Injectable()
export class MindSharesResolver implements Resolve<MindShare[]> {
  constructor(private mindShareService: MindShareService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      MindShare[] | Observable<MindShare[]> | Promise<MindShare[]> {
    return this.mindShareService.getMindShares();
  }
}
