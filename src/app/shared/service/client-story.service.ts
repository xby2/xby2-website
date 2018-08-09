import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientStory } from '../model/client-story';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class ClientStoryService {
  private url = environment.baseCmsUrl + environment.endpoints.clientStories;

  constructor(private httpClient: HttpClient) {}

  getClientStories(): Observable<ClientStory[]> {
    return this.httpClient.get<ClientStory[]>(this.url);
  }

  getFeaturedClientStories(): Observable<ClientStory[]> {
    return this.getClientStories().pipe(
      map(clientStories =>
        clientStories.filter(clientStory => clientStory.isFeatured)
      )
    );
  }

  getClientStory(id: string): Observable<ClientStory> {
    if (environment.usingLocalData) {
      return this.getClientStories().pipe(
        map(
          clientStories =>
            clientStories.filter(clientStory => clientStory.id === id)[0]
        )
      );
    }

    return this.httpClient.get<ClientStory>(this.url + '/' + id);
  }
}
