import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FrequentlyAskedQuestion } from '../model/frequently-asked-question';
import { FrequentlyAskedQuestionService } from '../service/frequently-asked-question.service';

@Injectable()
export class FrequentlyAskedQuestionsResolver
    implements Resolve<FrequentlyAskedQuestion[]> {
  constructor(private frequentlyAskedQuestionService:
      FrequentlyAskedQuestionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      FrequentlyAskedQuestion[] | Observable<FrequentlyAskedQuestion[]> |
      Promise<FrequentlyAskedQuestion[]> {
    return this.frequentlyAskedQuestionService.getFrequentlyAskedQuestions();
  }
}
