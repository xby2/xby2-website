import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perk } from '../model/perk';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PerkService {
  private url = '../assets/data/perks.json';

  constructor(private httpClient: HttpClient) { }

  getPerks(): Observable<Perk[]> {
    return this.httpClient.get<Array<Perk>>(this.url);
  }
}
