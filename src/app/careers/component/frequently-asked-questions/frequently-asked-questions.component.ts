import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xby2-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {
  @Input() frequentlyAskedQuestions;

  constructor() { }

  ngOnInit() {
    if (this.frequentlyAskedQuestions == null) {
      throw new Error('\'frequentlyAskedQuestions\' attribute required.');
    }
  }
}
