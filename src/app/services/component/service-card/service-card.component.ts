import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../shared/model/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;
  @Input() isFirst;
  @Input() isLast;

  constructor() { }

  ngOnInit() {
    if (this.service == null) {
      throw new Error('\'service\' attribute required.');
    }
  }
}
