import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { LinksService } from '../service/links.service';

@Component({
  selector: 'xby2-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: Link[];
  modalIsVisible = false;

  constructor(private _linksService: LinksService) { }

  ngOnInit() {
    this._linksService.getLinks().subscribe(
      response => this.links = response
    );
  }

  toggleModal() {
    this.modalIsVisible = !this.modalIsVisible;
  }
}
