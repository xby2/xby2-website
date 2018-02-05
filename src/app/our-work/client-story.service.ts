import { Injectable } from '@angular/core';
import { ClientStory } from './client-story';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientStoryService {
  private url = '../assets/client-stories.json';

  constructor(private httpClient: HttpClient) { }

  getClientStories(): Observable<ClientStory[]> {
    return this.httpClient.get<ClientStory[]>(this.url);
  }

  getFeaturedClientStories(): Observable<ClientStory[]> {
    return this.getClientStories()
      .map(clientStories =>
           clientStories.filter(clientStory => clientStory.isFeatured));
  }

  getClientStory(id: string): Observable<ClientStory> {
    return this.getClientStories()
      .map(clientStories =>
           clientStories.filter(clientStory => clientStory.id === id)[0]);
  }
}
