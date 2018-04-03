import { Component, OnInit, Input } from '@angular/core';
import { Xby2Location } from '../../../model/xby2-location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() location: Xby2Location;

  constructor() { }

  ngOnInit() {
  }

}
