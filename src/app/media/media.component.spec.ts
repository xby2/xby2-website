import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media} from './model/media';

describe('MediaComponent', () => {
    let component: MediaComponent;
    let fixture: ComponentFixture<MediaComponent>;

    beforeEach(async(() => {
      const mockActivatedRoute = {
        data: {
          subscribe() {}
        }
      };

      TestBed.configureTestingModule({
        declarations: [MediaComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: mockActivatedRoute
          }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MediaComponent);
        component = fixture.componentInstance;
        component.media = new Media();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
