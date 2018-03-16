import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-work',
  templateUrl: './filter-work.component.html',
  styleUrls: ['./filter-work.component.css']
})
export class FilterWorkComponent implements OnInit {
  @Output() registerClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(industry: string) {
    this.registerClick.emit(industry);
  }
}
