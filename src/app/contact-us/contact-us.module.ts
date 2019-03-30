import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared.module';

import { AgmCoreModule } from '@agm/core';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScriptHackComponent } from '../scripthack/scripthack.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkjYw9o7lN30iHlz6SYAqH5OU9tiWX85Y'
    }),
    ReactiveFormsModule
  ],
  declarations: [ContactUsComponent, ContactUsFormComponent, ScriptHackComponent],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }
