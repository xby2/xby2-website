import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'xby2-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  homeHeaderText = environment.locationSpecificInformation.homeHeaderText;

  constructor() {}

  ngOnInit() {}
}
