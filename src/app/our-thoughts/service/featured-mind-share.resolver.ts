import { Injectable } from '@angular/core';
import { MindShare } from './mind-share';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MindShareService } from './mind-share.service';

@Injectable()
export class FeaturedMindShareResolver implements Resolve<MindShare> {
  constructor(private mindShareService: MindShareService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      MindShare | Observable<MindShare> | Promise<MindShare> {
    return this.mindShareService.getFeaturedMindShare();
  }
}
