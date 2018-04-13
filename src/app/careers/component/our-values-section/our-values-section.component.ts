import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { ButtonGroupItem } from '../../../shared/model/button-group-item';
import { CompanyValue } from '../../model/company-value';

@Component({
  selector: 'app-our-values-section',
  templateUrl: './our-values-section.component.html',
  styleUrls: ['./our-values-section.component.css']
})
export class OurValuesSectionComponent implements OnInit {
  @Input() companyValues: CompanyValue[];
  @Input() buttonGroupItems: ButtonGroupItem[];

  visibleValue: string;
  isButtonGroupVertical: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isButtonGroupVertical =
      this.checkIfButtonGroupVertical(window.screen.width);
  }

  constructor() { }

  ngOnInit() {
    if (this.companyValues == null) {
      throw new Error('\'companyValues\' attribute required.');
    }
    if (this.buttonGroupItems == null) {
      throw new Error('\'buttonGroupItems\' attribute required.');
    }

    this.visibleValue = this.companyValues[0].description;
    this.isButtonGroupVertical =
      this.checkIfButtonGroupVertical(window.screen.width);
  }

  changeVisibleValue(id: string) {
    const selectedOurValue = this.companyValues
                      .filter(ourValues => ourValues.id === id)[0];

    if (selectedOurValue) {
      this.visibleValue = selectedOurValue.description;
    }
  }

  checkIfButtonGroupVertical(screenWidth: number): boolean {
    return screenWidth < 768;
  }
}
