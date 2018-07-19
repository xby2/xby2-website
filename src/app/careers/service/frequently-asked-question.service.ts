import { Injectable } from '@angular/core';
import { FrequentlyAskedQuestion } from '../model/frequently-asked-question';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class FrequentlyAskedQuestionService {
  private url = environment.baseCmsUrl + '/frequently-asked-questions';

  constructor(private httpClient: HttpClient) { }

  getFrequentlyAskedQuestions(): Observable<FrequentlyAskedQuestion[]> {
    return this.httpClient.get<Array<FrequentlyAskedQuestion>>(this.url);
  }
}
