import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { OpenPositionsResolver } from './careers/resolver/open-positions.resolver';
import { RecruitingValuesResolver } from './careers/resolver/recruiting-values.resolver';
import { OpenPositionResolver } from './careers/resolver/open-position.resolver';
import { CareerDetailComponent } from './careers/career-detail.component';
import { FeaturedMindShareResolver } from './home/resolver/featured-mind-share.resolver';
import { AboutUsComponent } from './about-us/about-us.component';
import { MediaComponent } from './media/media.component';
import { ServicesResolver } from './shared/resolver/services.resolver';
import { FeaturedOpenPositionsResolver } from './home/resolver/featured-open-positions.resolver';
import { FeaturedClientStoriesResolver } from './home/resolver/featured-client-stories.resolver';
import { ClientStoriesResolver } from './client-stories/resolver/client-stories.resolver.';
import { ClientStoryResolver } from './client-stories/resolver/client-story.resolver';
import { ClientStoryDetailComponent } from './client-stories/client-story-detail.component';
import { ClientStoriesComponent } from './client-stories/client-stories.component';
import { MindShareDetailComponent } from './in-the-news/mind-share-detail.component';
import { InTheNewsComponent } from './in-the-news/in-the-news.component';
import { MindSharesResolver } from './in-the-news/resolver/mind-shares.resolver';
import { IndustryResolver } from './shared/resolver/industry.resolver';
import { MindShareResolver } from './in-the-news/resolver/mind-share.resolver';
import { PerksResolver } from './careers/resolver/perks.resolver';
import { FrequentlyAskedQuestionsResolver } from './careers/resolver/frequently-asked-questions.resolver';
import { CompanyValuesResolver } from './about-us/resolver/company-values.resolver';
import { LegacyMediaComponent } from './media/legacy-media/legacy-media.component';
import { MediaResolver } from './media/legacy-media/media.resolver';

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
  {
    path: 'about-us',
    component: AboutUsComponent,
    resolve: {
      values: CompanyValuesResolver
    }
  },
  {
    path: 'media/ICTC2019',
    component: MediaComponent,
    resolve: { services: ServicesResolver }
  },
  {
    path: 'media/:id',
    component: LegacyMediaComponent,
    resolve: { media: MediaResolver }
  },
  {
    path: 'client-stories',
    component: ClientStoriesComponent,
    resolve: {
      clientStories: ClientStoriesResolver,
      industries: IndustryResolver
    }
  },
  {
    path: 'client-stories/:id',
    component: ClientStoryDetailComponent,
    resolve: { clientStory: ClientStoryResolver }
  },
  {
    path: 'insights',
    component: InTheNewsComponent,
    resolve: { mindShares: MindSharesResolver, industries: IndustryResolver }
  },
  {
    path: 'insights/:id',
    component: MindShareDetailComponent,
    resolve: { mindShare: MindShareResolver }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'careers',
    component: CareersComponent,
    resolve: {
      openPositions: OpenPositionsResolver,
      companyValues: RecruitingValuesResolver,
      perks: PerksResolver,
      frequentlyAskedQuestions: FrequentlyAskedQuestionsResolver
    }
  },
  {
    path: 'careers/:id',
    component: CareerDetailComponent,
    resolve: {
      openPosition: OpenPositionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
