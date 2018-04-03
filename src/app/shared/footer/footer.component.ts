import { Component, OnInit } from '@angular/core';
import { Link } from '../model/link';
import { SocialMediaLink } from '../model/social-media-link';
import { LinksService } from '../service/links.service';
import { Xby2Location } from '../model/xby2-location';
import { SocialMediaLinkService } from './service/social-media-link.service';
import { Xby2LocationService } from './service/xby2-location.service';

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
  locations: Xby2Location[];
  socialMediaLinks: SocialMediaLink[];

  constructor(private linksService: LinksService,
              private xby2LocationService: Xby2LocationService,
              private socialMediaLinkService: SocialMediaLinkService) { }

  ngOnInit() {
    this.linksService.getLinks().subscribe(
      response => this.links = response
    );
    this.xby2LocationService.getXby2Locations().subscribe(
      response => this.locations = response
    );
    this.socialMediaLinkService.getSocialMediaLinks().subscribe(
      response => this.socialMediaLinks = response
    );
  }
}
