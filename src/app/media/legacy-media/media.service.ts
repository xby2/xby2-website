import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from './media';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private url = '../assets/data/media.json';

  constructor(private httpClient: HttpClient) { }

  getMediaItems(): Observable<Media[]> {
    return this.httpClient.get<Media[]>(this.url);
  }

  getMedia(id: string): Observable<Media> {
    return this.getMediaItems().pipe(
      map(
        mediaItems =>
          mediaItems.filter(media => media.id === id)[0]
      )
    );
  }
}
