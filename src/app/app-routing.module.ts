import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
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
import { ExpertisesResolver } from './our-expertise/resolver/expertises.resolver';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { FeaturedMindShareResolver } from './home/resolver/featured-mind-share.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      expertises: ExpertisesResolver,
      featuredClientStories: FeaturedClientStoriesResolver,
      featuredMindShare: FeaturedMindShareResolver
    }
  },
  { path: 'our-story', component: OurStoryComponent },
  {
    path: 'our-expertise',
    component: OurExpertiseComponent,
    resolve: {
      expertises: ExpertisesResolver
    }
  },
  {
    path: 'our-work',
    component: OurWorkComponent,
    resolve: {clientStories: ClientStoriesResolver} },
  {
    path: 'our-work/:id',
    component: OurWorkDetailComponent,
    resolve: { clientStory: ClientStoryResolver }
  },
  {
    path: 'our-thoughts',
    component: OurThoughtsComponent,
    resolve: { mindShares: MindSharesResolver }
  },
  {
    path: 'our-thoughts/:id',
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
