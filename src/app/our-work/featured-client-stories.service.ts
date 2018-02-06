import { Injectable } from '@angular/core';
import { ClientStory } from './client-story';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientStoryService } from './client-story.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeaturedClientStoriesResolver implements Resolve<ClientStory[]> {
  constructor(private clientStoriesService: ClientStoryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
          ClientStory[] | Observable<ClientStory[]> | Promise<ClientStory[]> {
    return this.clientStoriesService.getFeaturedClientStories();
  }
}
