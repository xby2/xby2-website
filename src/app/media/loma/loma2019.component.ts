import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Service } from '../../shared/model/service';
import { environment } from '../../../environments/environment.staging';

@Component({
  selector: 'xby2-loma2019',
  templateUrl: './loma2019.component.html',
  styleUrls: ['./loma2019.component.css']
})
export class Loma2019Component implements OnInit {
  services: Service[] = environment.services;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('LOMA 2019 - X by 2');
  }
}
