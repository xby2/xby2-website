import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MindShareDetailComponent } from './mind-share-detail.component';
import { SharedModule } from '../shared/shared.module';
import { InTheNewsComponent } from './in-the-news.component';
import { MindSharesResolver } from './resolver/mind-shares.resolver';
import { MindShareResolver } from './resolver/mind-share.resolver';
import { IndustryResolver } from '../shared/resolver/industry.resolver';
import { MindShareListingComponent } from './mind-share-listing/mind-share-listing.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    InTheNewsComponent,
    MindShareDetailComponent,
    MindShareListingComponent
  ],
  providers: [MindSharesResolver, MindShareResolver, IndustryResolver],
  exports: [InTheNewsComponent, MindShareDetailComponent]
})
export class InTheNewsModule {}
