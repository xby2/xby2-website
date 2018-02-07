import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Xby2LogoComponent } from './shared/xby2-logo.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { OurThoughtsComponent } from './our-thoughts/our-thoughts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LinksService } from './links.service';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { FormsModule } from '@angular/forms';
import { ContactUsFormComponent } from './contact-us/contact-us-form.component';
import { ExpertiseService } from './our-expertise/expertise.service';
import { ContactService } from './contact-us/contact.service';
import { ToastrService } from './contact-us/toastr.service';
import { ClientStoryService } from './our-work/client-story.service';
import { ClientStoryResolver } from './our-work/client-story.resolver';
import { FeaturedClientStoriesResolver } from './our-work/featured-client-stories.service';
import { ExpertisesResolver } from './our-expertise/expertises.resolver';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail/our-thoughts-detail.component';
import { MindShareListingComponent } from './our-thoughts/mind-share-listing/mind-share-listing.component';
import { ClientStoryListingComponent } from './our-work/client-story-listing/client-story-listing.component';
import { FeaturedMindShareResolver } from './our-thoughts/service/featured-mind-share.resolver';
import { MindShareService } from './our-thoughts/service/mind-share.service';
import { MindSharesResolver } from './our-thoughts/service/mind-shares.resolver';
import { MindShareResolver } from './our-thoughts/service/mind-share.resolver';

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
    MindShareListingComponent
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
    MindShareResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
