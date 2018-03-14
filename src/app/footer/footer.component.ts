import { Component, OnInit } from '@angular/core';
import { Location } from './model/location';
import { Link } from '../shared/model/link';
import { SocialMediaLink } from './model/social-media-link';
import { LinksService } from '../shared/service/links.service';

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
      icon: 'fab fa-linkedin fa-2x',
      href: 'https://www.linkedin.com/company/xby2'
    },
    {
      icon: 'fab fa-twitter-square fa-2x',
      href: 'https://twitter.com/x_by_2'
    }
  ];

  constructor(private linksService: LinksService) { }

  ngOnInit() {
    this.linksService.getLinks().subscribe(
      response => this.links = response
    );
  }
}
