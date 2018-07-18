import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ClientStory } from '../model/client-story';
import { environment } from '../../../environments/environment';

@Injectable()
export class ClientStoryService {
  private url = environment.baseCmsUrl + '/client-stories';

  constructor(private httpClient: HttpClient) {}

  getClientStories(): Observable<ClientStory[]> {
    return this.httpClient.get<ClientStory[]>(this.url);
  }

  getFeaturedClientStories(): Observable<ClientStory[]> {
    return this.getClientStories().map(clientStories =>
      clientStories.filter(clientStory => clientStory.isFeatured)
    );
  }

  getClientStory(id: string): Observable<ClientStory> {
    return this.httpClient.get<ClientStory>(this.url + '/' + id);
  }
}
