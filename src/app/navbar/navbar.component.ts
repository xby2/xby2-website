import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LinksService } from '../links.service';

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
