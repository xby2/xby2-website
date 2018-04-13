import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact-us/service/contact.service';
import { ToastrService } from './contact-us/service/toastr.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ServiceService } from './shared/service/service.service';
import { ServicesModule } from './services/services.module';
import { ServicesResolver } from './shared/resolver/services.resolver';
import { ClientStoriesModule } from './client-stories/client-stories.module';
import { InTheNewsModule } from './in-the-news/in-the-news.module';
import { CareersModule } from './careers/careers.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
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
    InTheNewsModule,
    CareersModule
  ],
  providers: [
    ServiceService,
    ContactService,
    ToastrService,
    ServicesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
