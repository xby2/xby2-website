import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../model/media';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaService {
    private url = '../assets/data/media.json';

    constructor(private httpClient: HttpClient) {}

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
