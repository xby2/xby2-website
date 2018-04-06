import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InformationalBoxComponent } from './component/informational-box/informational-box.component';
import { AboutUsComponent } from './about-us.component';
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CountUpModule
  ],
  declarations: [
    InformationalBoxComponent,
    AboutUsComponent
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
