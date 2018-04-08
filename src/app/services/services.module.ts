import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceCardComponent } from './component/service-card/service-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ServicesComponent,
    ServiceCardComponent
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }
