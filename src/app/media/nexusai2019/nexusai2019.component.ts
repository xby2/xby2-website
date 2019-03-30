import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/model/service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-nexusai2019',
  templateUrl: './nexusai2019.component.html',
  styleUrls: ['./nexusai2019.component.css']
})
export class NexusAi2019Component implements OnInit {
  services: Service[];

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Nexus AI 2019 - X by 2');
    this.services = this.route.snapshot.data.services;
  }
}
