import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MediaHeaderComponent } from './media-header/media-header.component';
import { MediaMeetOurTeamComponent } from './media-meet-our-team/media-meet-our-team.component';
import { MediaContactComponent } from './media-contact/media-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LegacyMediaComponent } from './legacy-media/legacy-media.component';
import { Loma2019Component } from './loma/loma2019.component';
import { Loma2019MeetOurTeamComponent } from './loma/loma2019-meet-our-team/loma2019-meet-our-team.component';
import { NexusAi2019Component } from './nexusai2019/nexusai2019.component';
import { NexusAi2019MeetOurTeamComponent } from './nexusai2019/nexusai2019-meet-our-team/nexusai2019-meet-our-team.component';
import { SpaComponent } from './spa/spa.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    MediaHeaderComponent,
    MediaMeetOurTeamComponent,
    MediaContactComponent,
    LegacyMediaComponent,
    Loma2019Component,
    Loma2019MeetOurTeamComponent,
    NexusAi2019Component,
    NexusAi2019MeetOurTeamComponent,
    SpaComponent,
  ],
  exports: [
    MediaHeaderComponent,
    MediaMeetOurTeamComponent,
    MediaContactComponent,
    LegacyMediaComponent,
    Loma2019Component
  ]
})
export class MediaModule { }
