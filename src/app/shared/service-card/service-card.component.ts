import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../model/service';
import { Preconditions } from '../model/preconditions';

@Component({
  selector: 'xby2-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;
  @Input() hideViewClientStory: boolean;

  constructor() { }

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('service', this.service);
  }
}
