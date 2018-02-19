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
import { ExpertiseService } from './our-expertise/expertise.service';
import { ExpertisesResolver } from './our-expertise/expertises.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail/our-thoughts-detail.component';
import { MindShareListingComponent } from './our-thoughts/mind-share-listing/mind-share-listing.component';
import { FeaturedMindShareResolver } from './our-thoughts/service/featured-mind-share.resolver';
import { MindShareService } from './our-thoughts/service/mind-share.service';
import { MindSharesResolver } from './our-thoughts/service/mind-shares.resolver';
import { MindShareResolver } from './our-thoughts/service/mind-share.resolver';
import { ContactUsFormComponent } from './contact-us/contact-us-form/contact-us-form.component';
import { ContactService } from './contact-us/service/contact.service';
import { ToastrService } from './contact-us/service/toastr.service';
import { OpenPositionsResolver } from './careers/service/open-positions.resolver';
import { OpenPositionService } from './careers/service/open-position.service';
import { OurWorkDetailComponent } from './our-work/our-work-detail/our-work-detail.component';
import { ClientStoryService } from './our-work/service/client-story.service';
import { ClientStoryResolver } from './our-work/service/client-story.resolver';
import { FeaturedClientStoriesResolver } from './our-work/service/featured-client-stories.resolver';
import { LinksService } from './shared/service/links.service';
import { ModalComponent } from './navbar/modal/modal.component';
import { HomeExpertiseComponent } from './home/home-expertise/home-expertise.component';
import { ClientStoryListingComponent } from './shared/client-story-listing/client-story-listing.component';
import { FeaturedMindShareComponent } from './home/featured-mind-share/featured-mind-share.component';
import { ClientStoriesResolver } from './our-work/service/client-stories.resolver.';
import { Xby2LogoComponent } from './shared/xby2-logo2/xby2-logo.component';
import { FrequentlyAskedQuestionsComponent } from './careers/frequently-asked-questions/frequently-asked-questions.component';
import { CompanyValuesResolver } from './careers/service/company-values.resolver';
import { CompanyValueService } from './careers/service/company-value.service';

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
    FrequentlyAskedQuestionsComponent
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
    CompanyValuesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
