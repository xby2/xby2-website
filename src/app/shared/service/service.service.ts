import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServiceService {
  private url = environment.baseCmsUrl + environment.endpoints.services;

  constructor(private httpClient: HttpClient) {}

  getExpertises(): Observable<Service[]> {
    return this.httpClient.get<Array<Service>>(this.url);
  }
}
