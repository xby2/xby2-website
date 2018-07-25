import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialMediaLink } from '../../model/social-media-link';
import { Observable } from 'rxjs';

@Injectable()
export class SocialMediaLinkService {
  readonly url = '../assets/data/social-media-links.json';

  constructor(private httpClient: HttpClient) { }

  getSocialMediaLinks(): Observable<SocialMediaLink[]> {
    return this.httpClient.get<Array<SocialMediaLink>>(this.url);
  }
}
