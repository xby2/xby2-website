import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { Location } from '../location';
import { SocialMediaLink } from '../social-media-link';
import { LinksService } from '../links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  description = 'X by 2 is a technology consultancy focused on the practice ' +
                'of application and data architecture in the insurance and ' +
                'healthcare industries.';
  links: Link[];
  locations: Location[] = [{
    name: 'Detroit, MI',
    address: '35055 W Twelve Mile Rd, Suite 220',
    city: 'Farmington Hills',
    state: 'MI',
    zip: '48331',
    phone: '248.538.9292'
  },
  {
    name: 'Toronto, ON',
    address: '2425 Matheson Blvd East, Suite 800',
    city: 'Mississauga',
    state: 'ON',
    zip: 'L4W 5KA',
    phone: '905.267.0223'
  }];
  socialMediaLinks: SocialMediaLink[] = [
    {
      imageUrl: './assets/linkedin.png',
      href: 'https://www.linkedin.com/company/xby2'
    },
    {
      imageUrl: './assets/twitter.png',
      href: 'https://twitter.com/x_by_2'
    }
  ];

  constructor(private _linksService: LinksService) { }

  ngOnInit() {
    this._linksService.getLinks().subscribe(
      response => this.links = response
    );
  }
}
