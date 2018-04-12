import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { FeaturedMindShareComponent } from './component/featured-mind-share/featured-mind-share.component';
import { FeaturedMindShareResolver } from './resolver/featured-mind-share.resolver';
import { SharedModule } from '../shared/shared.module';
import { FeaturedClientStoriesComponent } from './component/featured-client-stories/featured-client-stories.component';
import { HomeServiceCardComponent } from './component/home-service-card/home-service-card.component';
import { HomeCareersComponent } from './component/home-careers/home-careers.component';
import { FeaturedOpenPositionsResolver } from './resolver/featured-open-positions.resolver';
import { FeaturedOpenPositionCardComponent } from './component/featured-open-position-card/featured-open-position-card.component';
import { AuthorInfoComponent } from './component/author-info/author-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeServiceCardComponent,
    HeroImageComponent,
    FeaturedMindShareComponent,
    FeaturedClientStoriesComponent,
    HomeCareersComponent,
    FeaturedOpenPositionCardComponent,
    AuthorInfoComponent
  ],
  providers: [
    FeaturedMindShareResolver,
    FeaturedOpenPositionsResolver
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
