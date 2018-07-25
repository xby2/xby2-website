import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientStory } from '../../shared/model/client-story';
import { ClientStoryService } from '../../shared/service/client-story.service';

@Injectable()
export class FeaturedClientStoriesResolver implements Resolve<ClientStory[]> {
  constructor(private clientStoriesService: ClientStoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
          ClientStory[] | Observable<ClientStory[]> | Promise<ClientStory[]> {
    return this.clientStoriesService.getFeaturedClientStories();
  }
}
