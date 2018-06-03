import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { ButtonGroupItem } from '../../../shared/model/button-group-item';
import { CompanyValue } from '../../model/company-value';

@Component({
  selector: 'xby2-our-values-section',
  templateUrl: './our-values-section.component.html',
  styleUrls: ['./our-values-section.component.css']
})
export class OurValuesSectionComponent implements OnInit {
  @Input() companyValues: CompanyValue[];

  constructor() { }

  ngOnInit() {
    if (this.companyValues == null) {
      throw new Error('\'companyValues\' attribute required.');
    }
  }
}
