import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MediaComponent } from './media.component';
import { CountUpModule } from 'countup.js-angular2';
import { MediaResolver } from './resolver/media.resolver';
import { MediaService } from './service/media.service';
import {NoSanitizePipe} from './NoSanitizePipe';

@NgModule({
  imports: [CommonModule, SharedModule, CountUpModule],
  declarations: [MediaComponent, NoSanitizePipe],
  providers: [
      MediaService,
      MediaResolver,
  ],
  exports: [MediaComponent]
})
export class MediaModule {}
