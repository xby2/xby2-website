import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { environment } from '../environments/environment';
import { GeolocationService } from './core/geolocation.service';

declare let ga: Function;

@Component({
  selector: 'xby2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private geolocationService: GeolocationService) {
    if (environment.canadaRedirectApiKey !== '') {
      this.geolocationService.getCountryCode().subscribe(
        response => {
          if (response === 'CA') {
            window.location.href = 'https://xby2.ca' + window.location.pathname;
          }
        }
      );
    }

    if (!this.hasGoogleAnalyticsTrackingId()) {
      return;
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit(): void {
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url !== this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  private hasGoogleAnalyticsTrackingId() {
    return (
      environment.googleAnalyticsTrackingId !== null &&
      environment.googleAnalyticsTrackingId !== ''
    );
  }
}
