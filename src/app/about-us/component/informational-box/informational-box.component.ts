import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xby2-informational-box',
  templateUrl: './informational-box.component.html',
  styleUrls: ['./informational-box.component.css']
})
export class InformationalBoxComponent implements OnInit {
  @Input() title: string;
  @Input() value: number;

  countupOptions = {
    useGrouping: false
  };

  constructor() { }

  ngOnInit() {
    if (this.title == null) {
      throw new Error('\'title\' attribute required.');
    }
    if (this.value == null) {
      throw new Error('\'value\' attribute required.');
    }
  }
}
