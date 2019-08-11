import { Component, OnInit } from '@angular/core';
import { Service } from '../../shared/model/service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'xby2-insurancetransformation',
  templateUrl: './insurancetransformation.component.html',
  styleUrls: ['./insurancetransformation.component.css']
})
export class InsuranceTransformationComponent implements OnInit {
  services: Service[] = environment.services;

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Insurance Transformation - X by 2');
  }
}
