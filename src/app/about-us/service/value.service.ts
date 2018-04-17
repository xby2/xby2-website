import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Value } from '../model/value';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValueService {
  private url = '../assets/data/values.json';

  constructor(private _httpClient: HttpClient) { }

  getValues(): Observable<Value[]> {
    return this._httpClient.get<Array<Value>>(this.url);
  }
}
