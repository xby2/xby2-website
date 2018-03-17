import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent implements OnInit {
  @Output() registerClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.registerClick.emit();
  }
}
