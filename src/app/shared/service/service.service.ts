import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service';

@Injectable()
export class ServiceService {
  private url = '../assets/data/expertises.json';

  constructor(private httpClient: HttpClient) {}

  getExpertises(): Observable<Service[]> {
    return this.httpClient.get<Array<Service>>(this.url);
  }
}
