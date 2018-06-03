import { Component, OnInit, Input } from '@angular/core';
import { FrequentlyAskedQuestion } from '../../model/frequently-asked-question';

@Component({
  selector: 'xby2-frequently-asked-question',
  templateUrl: './frequently-asked-question.component.html',
  styleUrls: ['./frequently-asked-question.component.css']
})
export class FrequentlyAskedQuestionComponent implements OnInit {
  @Input() frequentlyAskedQuestion: FrequentlyAskedQuestion;
  isExpanded = false;

  constructor() {}

  ngOnInit() {
    if (this.frequentlyAskedQuestion == null) {
      throw new Error('\'frequentlyAskedQuestion\' is required');
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
