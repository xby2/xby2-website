import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perk } from '../model/perk';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PerkService {
  private url = environment.baseCmsUrl + environment.endpoints.perks;

  constructor(private httpClient: HttpClient) {}

  getPerks(): Observable<Perk[]> {
    return this.httpClient.get<Array<Perk>>(this.url);
  }
}
