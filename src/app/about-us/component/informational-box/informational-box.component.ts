import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informational-box',
  templateUrl: './informational-box.component.html',
  styleUrls: ['./informational-box.component.css']
})
export class InformationalBoxComponent implements OnInit {
  @Input() class: string;
  @Input() title: string;
  @Input() value: number;
  @Input() linkText: string;
  @Input() link: string;

  countupOptions = {
    useGrouping: false
  };

  constructor() { }

  ngOnInit() {
  }
}
