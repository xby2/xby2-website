import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../shared/model/service';
import { Preconditions } from '../../../shared/model/preconditions';

@Component({
  selector: 'xby2-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;
  @Input() isFirst;
  @Input() isLast;

  constructor() {}

  ngOnInit() {
    Preconditions.IsNotUndefinedOrNull('service', this.service);
  }
}
