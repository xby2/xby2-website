import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xby2-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}
