import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact-us/service/contact.service';
import { ToastrService } from './contact-us/service/toastr.service';
import { CompanyValueService } from './careers/service/company-value.service';
import { OpenPositionsResolver } from './careers/resolver/open-positions.resolver';
import { CompanyValuesResolver } from './careers/resolver/company-values.resolver';
import { OpenPositionResolver } from './careers/resolver/open-position.resolver';
import { CareerDetailComponent } from './careers/career-detail.component';
import { FrequentlyAskedQuestionsComponent } from './careers/component/frequently-asked-questions/frequently-asked-questions.component';
import { OpenPositionsSectionComponent } from './careers/component/open-positions-section/open-positions-section.component';
import { CareerDetailsActionItemsComponent } from './careers/component/career-details-action-items/career-details-action-items.component';
import { MeetOurPeopleSectionComponent } from './careers/component/meet-our-people-section/meet-our-people-section.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ServiceService } from './shared/service/service.service';
import { ServicesModule } from './services/services.module';
import { ServicesResolver } from './shared/resolver/services.resolver';
import { ClientStoriesModule } from './client-stories/client-stories.module';
import { InTheNewsModule } from './in-the-news/in-the-news.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CareersComponent,
    FrequentlyAskedQuestionsComponent,
    CareerDetailComponent,
    OpenPositionsSectionComponent,
    CareerDetailsActionItemsComponent,
    MeetOurPeopleSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    AboutUsModule,
    ServicesModule,
    ClientStoriesModule,
    InTheNewsModule
  ],
  providers: [
    ServiceService,
    ContactService,
    ToastrService,
    ServicesResolver,
    OpenPositionsResolver,
    CompanyValueService,
    CompanyValuesResolver,
    OpenPositionResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
