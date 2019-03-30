import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiKey = environment.canadaRedirectApiKey;

  constructor(private httpClient: HttpClient) { }

  getCountryCode(): Observable<string> {
    if (this.apiKey === '') {
      throw new Error('API Key is not defined.');
    }

    return this.httpClient.get(
      `https://api.ipdata.co/country_code?api-key=${this.apiKey}`,
      { responseType: 'text' });
  }
}
