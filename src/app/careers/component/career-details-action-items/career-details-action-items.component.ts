import { Component, OnInit, Input } from '@angular/core';
import { ShareLink } from '../../model/share-link';

@Component({
  selector: 'xby2-career-details-action-items',
  templateUrl: './career-details-action-items.component.html',
  styleUrls: ['./career-details-action-items.component.css']
})
export class CareerDetailsActionItemsComponent implements OnInit {
  @Input() shareLinks: ShareLink[];
  @Input() applyUrl: string;
  @Input() applyText: string;

  constructor() { }

  ngOnInit() {
  }
}
