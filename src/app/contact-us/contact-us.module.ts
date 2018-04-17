import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { Xby2LocationsResolver } from './resolver/xby2-locations.resolver';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkjYw9o7lN30iHlz6SYAqH5OU9tiWX85Y'
    })
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [
    Xby2LocationsResolver
  ],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
