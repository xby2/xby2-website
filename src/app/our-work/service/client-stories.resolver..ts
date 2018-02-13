import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientStoryService } from './client-story.service';
import { Observable } from 'rxjs/Observable';
import { ClientStory } from '../model/client-story';

@Injectable()
export class ClientStoriesResolver implements Resolve<ClientStory[]> {
  constructor(private clientStoryService: ClientStoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      ClientStory[] | Observable<ClientStory[]> | Promise<ClientStory[]> {
    return this.clientStoryService.getClientStories();
  }
}
