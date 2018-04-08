import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { FeaturedMindShareComponent } from './component/featured-mind-share/featured-mind-share.component';
import { FeaturedMindShareResolver } from './resolver/featured-mind-share.resolver';
import { SharedModule } from '../shared/shared.module';
import { FeaturedClientStoriesComponent } from './component/featured-client-stories/featured-client-stories.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { HomeServiceCardComponent } from './component/home-service-card/home-service-card.component';

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
    ContactFormComponent
  ],
  providers: [
    FeaturedMindShareResolver
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
