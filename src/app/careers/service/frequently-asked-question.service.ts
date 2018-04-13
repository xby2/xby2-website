import { Injectable } from '@angular/core';
import { FrequentlyAskedQuestion } from '../model/frequently-asked-question';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FrequentlyAskedQuestionService {
  private url = '../assets/data/frequently-asked-questions.json';

  constructor(private httpClient: HttpClient) { }

  getFrequentlyAskedQuestions(): Observable<FrequentlyAskedQuestion[]> {
    return this.httpClient.get<Array<FrequentlyAskedQuestion>>(this.url);
  }
}
