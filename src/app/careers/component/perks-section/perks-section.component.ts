import { Component, OnInit, Input } from '@angular/core';
import { Perk } from '../../model/perk';

@Component({
  selector: 'app-perks-section',
  templateUrl: './perks-section.component.html',
  styleUrls: ['./perks-section.component.css']
})
export class PerksSectionComponent implements OnInit {
  @Input() perks: Perk[];

  constructor() { }

  ngOnInit() {
    if (this.perks == null) {
      throw new Error('\'perks\' attribute required.');
    }
  }

}
