import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClientStory } from '../../shared/model/client-story';
import { ClientStoryService } from '../../shared/service/client-story.service';

@Injectable()
export class ClientStoriesResolver implements Resolve<ClientStory[]> {
  constructor(private clientStoryService: ClientStoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      ClientStory[] | Observable<ClientStory[]> | Promise<ClientStory[]> {
    return this.clientStoryService.getClientStories();
  }
}
