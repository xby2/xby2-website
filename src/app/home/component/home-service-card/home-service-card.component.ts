import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../shared/model/service';

@Component({
  selector: 'app-home-service-card',
  templateUrl: './home-service-card.component.html',
  styleUrls: ['./home-service-card.component.css']
})
export class HomeServiceCardComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit() {
  }

}
