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
import { OurWorkDetailGuard } from './our-work/our-work-detail.guard';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail.component';
import { OurThoughtsDetailGuard } from './our-thoughts/our-thoughts-detail.guard';
import { FormsModule } from '@angular/forms';
import { ContactUsFormComponent } from './contact-us/contact-us-form.component';
import { ExpertiseService } from './our-expertise/expertise.service';
import { ContactService } from './contact-us/contact.service';
import { ToastrService } from './contact-us/toastr.service';
import { ClientStoryService } from './our-work/client-story.service';
import { ClientStoryListingComponent } from './our-work/client-story-listing.component';
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
    ClientStoryListingComponent
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
    OurWorkDetailGuard,
    OurThoughtsDetailGuard,
    ContactService,
    ToastrService,
    ClientStoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
