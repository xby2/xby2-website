import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TOASTR_TOKEN, Toastr } from './service/toastr.service';

const toastr: Toastr = window['toastr'];

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
