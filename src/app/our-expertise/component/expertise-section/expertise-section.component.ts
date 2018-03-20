import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expertise-section',
  templateUrl: './expertise-section.component.html',
  styleUrls: ['./expertise-section.component.css']
})
export class ExpertiseSectionComponent implements OnInit {
  @Input() expertise;
  @Input() isFirst;
  @Input() isLast;

  constructor() { }

  ngOnInit() {
  }

}
