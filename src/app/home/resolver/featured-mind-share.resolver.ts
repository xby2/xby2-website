import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MindShare } from '../../our-thoughts/service/mind-share';
import { MindShareService } from '../../our-thoughts/service/mind-share.service';

@Injectable()
export class FeaturedMindShareResolver implements Resolve<MindShare> {
  constructor(private mindShareService: MindShareService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      MindShare | Observable<MindShare> | Promise<MindShare> {
    return this.mindShareService
               .getMindShare('when-it-comes-to-large-projects-think-architecture-first');
  }
}
