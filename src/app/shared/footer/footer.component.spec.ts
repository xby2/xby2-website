import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { LinksService } from '../service/links.service';
import { Xby2LocationService } from './service/xby2-location.service';
import { SocialMediaLinkService } from './service/social-media-link.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    const mockLinksService = {
      getLinks() {
        return {
          subscribe() {}
        };
      }
    };
    const mockXby2LocationService = {
      getXby2Locations() {
        return {
          subscribe() {}
        };
      }
    };
    const mockSocialMediaLinkService = {
      getSocialMediaLinks() {
        return {
          subscribe() {}
        };
      }
    };

    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [
        {
          provide: LinksService,
          useValue: mockLinksService
        },
        {
          provide: Xby2LocationService,
          useValue: mockXby2LocationService
        },
        {
          provide: SocialMediaLinkService,
          useValue: mockSocialMediaLinkService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
