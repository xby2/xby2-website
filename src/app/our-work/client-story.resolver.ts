import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientStoryService } from './client-story.service';

@Injectable()
export class ClientStoryResolver implements Resolve<any> {
  constructor(private clientStoryService: ClientStoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.clientStoryService.getClientStory(route.params.id);
  }
}
