import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CompanyValue } from '../model/company-value';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyValueService {
  private url = environment.baseCmsUrl + environment.endpoints.companyValues;

  constructor(private httpClient: HttpClient) {}

  getCompanyValues(): Observable<CompanyValue[]> {
    return this.httpClient.get<Array<CompanyValue>>(this.url);
  }
}
