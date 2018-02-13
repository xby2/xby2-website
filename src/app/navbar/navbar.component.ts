import { Component, OnInit } from '@angular/core';
import { LinksService } from '../shared/service/links.service';
import { Link } from '../shared/model/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: Link[];

  constructor(private _linksService: LinksService) { }

  ngOnInit() {
    this._linksService.getLinks().subscribe(
      response => this.links = response
    );
  }
}
