import { Component, OnInit, Input } from '@angular/core';
import { Perk } from '../../model/perk';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'xby2-perks-section',
  templateUrl: './perks-section.component.html',
  styleUrls: ['./perks-section.component.css']
})
export class PerksSectionComponent implements OnInit {
  @Input() perks: Perk[];
  assetPrefix = environment.assetPrefixes.perks;

  constructor() { }

  ngOnInit() {
    if (this.perks == null) {
      throw new Error('\'perks\' attribute required.');
    }
  }

}
