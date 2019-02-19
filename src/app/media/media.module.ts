import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MediaHeaderComponent } from './media-header/media-header.component';
import { MediaMeetOurTeamComponent } from './media-meet-our-team/media-meet-our-team.component';
import { MediaContactComponent } from './media-contact/media-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LegacyMediaComponent } from './legacy-media/legacy-media.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [MediaHeaderComponent, MediaMeetOurTeamComponent, MediaContactComponent, LegacyMediaComponent],
  exports: [
    MediaHeaderComponent,
    MediaMeetOurTeamComponent,
    MediaContactComponent,
    LegacyMediaComponent
  ]
})
export class MediaModule { }
