import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Service } from '../shared/model/service';

@Component({
  selector: 'xby2-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  services: Service[];

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('ICTC 2019 - X by 2');
    this.services = this.route.snapshot.data.services;
  }
}
