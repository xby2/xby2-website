import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../shared/model/service';
import { Title } from '@angular/platform-browser';
import { Preconditions } from '../shared/model/preconditions';

@Component({
  selector: 'xby2-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[];
  headerText = 'Services';
  subheaderText = 'Guiding clients from strategy through delivery.';

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Services - X by 2');
    this.services = this.route.snapshot.data.services;
    Preconditions.IsNotUndefinedOrNull('services', this.services);
  }
}
