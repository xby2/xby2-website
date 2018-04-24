import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientStoryListingComponent } from './component/client-story-listing/client-story-listing.component';
import { ContentSectionComponent } from './component/content-section/content-section.component';
import { NextItemSectionComponent } from './component/next-item-section/next-item-section.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { LinksService } from './service/links.service';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './navbar/component/modal/modal.component';
import { SocialMediaLinkService } from './footer/service/social-media-link.service';
import { Xby2LocationService } from './footer/service/xby2-location.service';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from './component/logo/logo.component';
import { OpenPositionService } from './service/open-position.service';
import { ButtonGroupComponent } from './component/button-group/button-group.component';
import { HeroImageComponent } from './component/hero-image/hero-image.component';
import { MindShareService } from './service/mind-share.service';
import { AuthorInfoComponent } from './component/author-info/author-info.component';
import { OpenPositionCardComponent } from './component/open-position-card/open-position-card.component';
import { ContactUsFormComponent } from './component/contact-us-form/contact-us-form.component';
import { ContactService } from './service/contact.service';
import { ServicesResolver } from './resolver/services.resolver';
import { ServiceService } from './service/service.service';
import { ToastrService } from './service/toastr.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    ClientStoryListingComponent,
    ContentSectionComponent,
    ButtonGroupComponent,
    FooterComponent,
    NavbarComponent,
    NextItemSectionComponent,
    PageHeaderComponent,
    ModalComponent,
    ContactUsFormComponent,
    LogoComponent,
    HeroImageComponent,
    AuthorInfoComponent,
    OpenPositionCardComponent
  ],
  providers: [
    LinksService,
    SocialMediaLinkService,
    Xby2LocationService,
    OpenPositionService,
    MindShareService,
    ContactService,
    ServicesResolver,
    ServiceService,
    ToastrService
  ],
  exports: [
    ClientStoryListingComponent,
    ContentSectionComponent,
    ButtonGroupComponent,
    FooterComponent,
    NavbarComponent,
    NextItemSectionComponent,
    PageHeaderComponent,
    AppRoutingModule,
    ContactUsFormComponent,
    LogoComponent,
    HeroImageComponent,
    AuthorInfoComponent,
    OpenPositionCardComponent,
    ContactUsFormComponent
  ]
})
export class SharedModule { }