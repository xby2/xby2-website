import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/model/service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent implements OnInit {
  services: Service[] = environment.services;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Single Page Applications - X by 2');
  }
}
