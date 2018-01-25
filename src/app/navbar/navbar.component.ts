import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: Link[] = [
    { label: 'Our Story', link: '/our-story' },
    { label: 'Our Expertise', link: '/our-expertise' },
    { label: 'Our Work', link: '/our-work' },
    { label: 'Our Thoughts', link: '/our-thoughts' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact Us', link: '/contact-us', class: 'contact-us' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
