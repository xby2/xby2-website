import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../shared/model/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[];
  headerText = 'Services';
  subheaderText = 'Guiding clients from strategy through delivery.';

  constructor(private route: ActivatedRoute) {
    this.services = this.route.snapshot.data.services;
  }

  ngOnInit() {
    if (this.services == null) {
      throw new Error('\'services\' parameter required.');
    }
  }
}
