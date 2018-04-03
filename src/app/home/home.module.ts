import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeExpertiseComponent } from './component/home-expertise/home-expertise.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { FeaturedMindShareComponent } from './component/featured-mind-share/featured-mind-share.component';
import { FeaturedMindShareResolver } from './resolver/featured-mind-share.resolver';
import { SharedModule } from '../shared/shared.module';
import { FeaturedClientStoriesComponent } from './component/featured-client-stories/featured-client-stories.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeExpertiseComponent,
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
