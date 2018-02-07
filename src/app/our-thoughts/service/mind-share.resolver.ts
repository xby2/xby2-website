import { Injectable } from '@angular/core';
import { MindShare } from './mind-share';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MindShareService } from './mind-share.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MindShareResolver implements Resolve<MindShare> {
  constructor(private mindShareService: MindShareService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      MindShare | Observable<MindShare> | Promise<MindShare> {
    return this.mindShareService.getMindShare(route.params.id);
  }
}
