import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServiceService {
  private url = environment.baseCmsUrl + '/services';

  constructor(private httpClient: HttpClient) {}

  getExpertises(): Observable<Service[]> {
    return this.httpClient.get<Array<Service>>(this.url);
  }
}
