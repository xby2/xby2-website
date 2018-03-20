import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-item-section',
  templateUrl: './next-item-section.component.html',
  styleUrls: ['./next-item-section.component.css']
})
export class NextItemSectionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
