import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurWorkComponent } from './our-work/our-work.component';
import { OurThoughtsComponent } from './our-thoughts/our-thoughts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { MindSharesResolver } from './our-thoughts/service/mind-shares.resolver';
import { MindShareResolver } from './our-thoughts/service/mind-share.resolver';
import { FeaturedClientStoriesResolver } from './our-work/service/featured-client-stories.resolver';
import { ClientStoryResolver } from './our-work/service/client-story.resolver';
import { ClientStoriesResolver } from './our-work/service/client-stories.resolver.';
import { OpenPositionsResolver } from './careers/resolver/open-positions.resolver';
import { CompanyValuesResolver } from './careers/resolver/company-values.resolver';
import { OpenPositionResolver } from './careers/resolver/open-position.resolver';
import { CareerDetailComponent } from './careers/career-detail.component';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { FeaturedMindShareResolver } from './home/resolver/featured-mind-share.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesResolver } from './shared/resolver/services.resolver';
import { ServicesComponent } from './services/services.component';
import { FeaturedOpenPositionsResolver } from './home/resolver/featured-open-positions.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      services: ServicesResolver,
      featuredClientStories: FeaturedClientStoriesResolver,
      featuredMindShare: FeaturedMindShareResolver,
      featuredOpenPositions: FeaturedOpenPositionsResolver
    }
  },
  { path: 'about-us', component: AboutUsComponent },
  {
    path: 'services',
    component: ServicesComponent,
    resolve: {
      services: ServicesResolver
    }
  },
  {
    path: 'client-stories',
    component: OurWorkComponent,
    resolve: {clientStories: ClientStoriesResolver} },
  {
    path: 'client-stories/:id',
    component: OurWorkDetailComponent,
    resolve: { clientStory: ClientStoryResolver }
  },
  {
    path: 'in-the-news',
    component: OurThoughtsComponent,
    resolve: { mindShares: MindSharesResolver }
  },
  {
    path: 'in-the-news/:id',
    component: OurThoughtsDetailComponent,
    resolve: { mindShare: MindShareResolver }
  },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'careers',
    component: CareersComponent,
    resolve: {
      openPositions: OpenPositionsResolver,
      companyValues: CompanyValuesResolver
    }
  },
  {
    path: 'careers/:id',
    component: CareerDetailComponent,
    resolve: {
      openPosition: OpenPositionResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
