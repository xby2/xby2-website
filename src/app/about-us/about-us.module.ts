import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InformationalBoxComponent } from './component/informational-box/informational-box.component';
import { AboutUsComponent } from './about-us.component';
import { CountUpModule } from 'countup.js-angular2';
import { ValueComponent } from './component/value/value.component';
import { CompanyValueService } from './service/company-value.service';
import { CompanyValuesResolver } from './resolver/company-values.resolver';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CountUpModule
  ],
  declarations: [
    InformationalBoxComponent,
    AboutUsComponent,
    ValueComponent
  ],
  providers: [
      CompanyValuesResolver,
      CompanyValueService
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
