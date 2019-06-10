import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Service } from '../shared/model/service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'xby2-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  services: Service[] = environment.services;
  enableLinkedInTag: boolean = environment.enableLinkedInTag;

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('ICTC 2019 - X by 2');
  }
}
