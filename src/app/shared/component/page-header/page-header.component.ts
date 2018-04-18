import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText;
  @Input() subheaderText;
  @Input() buttonText;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleButtonClick() {
    this.buttonClick.emit();
  }

}
