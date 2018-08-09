import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MindShare } from '../../shared/model/mind-share';
import { MindShareService } from '../../shared/service/mind-share.service';

@Injectable()
export class FeaturedMindShareResolver implements Resolve<MindShare> {
  constructor(private mindShareService: MindShareService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      MindShare | Observable<MindShare> | Promise<MindShare> {
    return this.mindShareService.getFeaturedMindShare();
  }
}
