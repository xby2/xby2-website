import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FeaturedMindShareComponent } from './component/featured-mind-share/featured-mind-share.component';
import { FeaturedMindShareResolver } from './resolver/featured-mind-share.resolver';
import { SharedModule } from '../shared/shared.module';
import { FeaturedClientStoriesComponent } from './component/featured-client-stories/featured-client-stories.component';
import { HomeCareersComponent } from './component/home-careers/home-careers.component';
import { FeaturedOpenPositionsResolver } from './resolver/featured-open-positions.resolver';
import { FeaturedClientStoriesResolver } from './resolver/featured-client-stories.resolver';
import { HomeHeaderComponent } from './component/home-header/home-header.component';
import { HomeClientsComponent } from './component/home-clients/home-clients.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    FeaturedMindShareComponent,
    FeaturedClientStoriesComponent,
    HomeCareersComponent,
    HomeHeaderComponent,
    HomeClientsComponent,
  ],
  providers: [
    FeaturedMindShareResolver,
    FeaturedOpenPositionsResolver,
    FeaturedClientStoriesResolver
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
