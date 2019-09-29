import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-enterprisedataplatform',
  templateUrl: './enterprisedataplatform.component.html',
  styleUrls: ['./enterprisedataplatform.component.css']
})
export class EnterprisedataplatformComponent implements OnInit {
  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Enterprise Data Platform - X by 2');
  }
}
