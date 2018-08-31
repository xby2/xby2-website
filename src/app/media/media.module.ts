import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MediaComponent } from './media.component';
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  imports: [CommonModule, SharedModule, CountUpModule],
  declarations: [MediaComponent],
  exports: [MediaComponent]
})
export class MediaModule {}
