import { Injectable } from '@angular/core';
import { FrequentlyAskedQuestion } from '../model/frequently-asked-question';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class FrequentlyAskedQuestionService {
  private url =
    environment.baseCmsUrl + environment.endpoints.frequentlyAskedQuestions;

  constructor(private httpClient: HttpClient) {}

  getFrequentlyAskedQuestions(): Observable<FrequentlyAskedQuestion[]> {
    return this.httpClient.get<Array<FrequentlyAskedQuestion>>(this.url);
  }
}
