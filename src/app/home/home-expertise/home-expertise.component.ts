import { Component, OnInit, Input } from '@angular/core';
import { Expertise } from '../../our-expertise/expertise';

@Component({
  selector: 'app-home-expertise',
  templateUrl: './home-expertise.component.html',
  styleUrls: ['./home-expertise.component.css']
})
export class HomeExpertiseComponent implements OnInit {
  @Input() expertise: Expertise;

  constructor() { }

  ngOnInit() {
  }

}
