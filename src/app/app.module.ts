import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { OurThoughtsComponent } from './our-thoughts/our-thoughts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MindShareListingComponent } from './our-thoughts/mind-share-listing/mind-share-listing.component';
import { MindShareService } from './our-thoughts/service/mind-share.service';
import { MindSharesResolver } from './our-thoughts/service/mind-shares.resolver';
import { MindShareResolver } from './our-thoughts/service/mind-share.resolver';
import { ContactUsFormComponent } from './contact-us/contact-us-form/contact-us-form.component';
import { ContactService } from './contact-us/service/contact.service';
import { ToastrService } from './contact-us/service/toastr.service';
import { OpenPositionService } from './careers/service/open-position.service';
import { ClientStoryService } from './our-work/service/client-story.service';
import { ClientStoryResolver } from './our-work/service/client-story.resolver';
import { FeaturedClientStoriesResolver } from './our-work/service/featured-client-stories.resolver';
import { LinksService } from './shared/service/links.service';
import { ModalComponent } from './navbar/modal/modal.component';
import { HomeExpertiseComponent } from './home/home-expertise/home-expertise.component';
import { FeaturedMindShareComponent } from './home/featured-mind-share/featured-mind-share.component';
import { ClientStoriesResolver } from './our-work/service/client-stories.resolver.';
import { CompanyValueService } from './careers/service/company-value.service';
import { OpenPositionsResolver } from './careers/resolver/open-positions.resolver';
import { CompanyValuesResolver } from './careers/resolver/company-values.resolver';
import { OpenPositionResolver } from './careers/resolver/open-position.resolver';
import { CareerDetailComponent } from './careers/career-detail.component';
import { FrequentlyAskedQuestionsComponent } from './careers/component/frequently-asked-questions/frequently-asked-questions.component';
import { OpenPositionsSectionComponent } from './careers/component/open-positions-section/open-positions-section.component';
import { CareerDetailsActionItemsComponent } from './careers/component/career-details-action-items/career-details-action-items.component';
import { PageHeaderComponent } from './shared/component/page-header/page-header.component';
import { Xby2LogoComponent } from './shared/component/xby2-logo2/xby2-logo.component';
import { ClientStoryListingComponent } from './shared/component/client-story-listing/client-story-listing.component';
import { ExpertiseService } from './our-expertise/service/expertise.service';
import { ExpertisesResolver } from './our-expertise/resolver/expertises.resolver';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { FeaturedMindShareResolver } from './home/resolver/featured-mind-share.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail.component';
import { ContentSectionComponent } from './shared/component/content-section/content-section.component';
import { MeetOurPeopleSectionComponent } from './careers/component/meet-our-people-section/meet-our-people-section.component';
import { FilterWorkComponent } from './shared/component/filter-work/filter-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Xby2LogoComponent,
    OurStoryComponent,
    OurExpertiseComponent,
    OurWorkComponent,
    OurThoughtsComponent,
    ContactUsComponent,
    CareersComponent,
    HomeComponent,
    FooterComponent,
    OurWorkDetailComponent,
    OurThoughtsDetailComponent,
    ContactUsFormComponent,
    ClientStoryListingComponent,
    MindShareListingComponent,
    ModalComponent,
    HomeExpertiseComponent,
    FeaturedMindShareComponent,
    FrequentlyAskedQuestionsComponent,
    CareerDetailComponent,
    OpenPositionsSectionComponent,
    CareerDetailsActionItemsComponent,
    PageHeaderComponent,
    ContentSectionComponent,
    MeetOurPeopleSectionComponent,
    FilterWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LinksService,
    ExpertiseService,
    ContactService,
    ToastrService,
    ClientStoryService,
    ClientStoryResolver,
    ExpertisesResolver,
    FeaturedClientStoriesResolver,
    FeaturedMindShareResolver,
    MindShareService,
    MindSharesResolver,
    MindShareResolver,
    OpenPositionsResolver,
    OpenPositionService,
    ClientStoriesResolver,
    CompanyValueService,
    CompanyValuesResolver,
    OpenPositionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
