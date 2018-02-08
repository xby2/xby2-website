import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { OurThoughtsComponent } from './our-thoughts/our-thoughts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { ClientStoryResolver } from './our-work/client-story.resolver';
import { FeaturedClientStoriesResolver } from './our-work/featured-client-stories.service';
import { ExpertisesResolver } from './our-expertise/expertises.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail/our-thoughts-detail.component';
import { FeaturedMindShareResolver } from './our-thoughts/service/featured-mind-share.resolver';
import { MindSharesResolver } from './our-thoughts/service/mind-shares.resolver';
import { MindShareResolver } from './our-thoughts/service/mind-share.resolver';
import { OpenPositionsResolver } from './careers/service/open-positions.resolver';

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
  { path: 'our-expertise', component: OurExpertiseComponent },
  { path: 'our-work', component: OurWorkComponent },
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
    resolve: { openPositions: OpenPositionsResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
