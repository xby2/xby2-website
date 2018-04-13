import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ServiceService } from './shared/service/service.service';
import { ServicesModule } from './services/services.module';
import { ServicesResolver } from './shared/resolver/services.resolver';
import { ClientStoriesModule } from './client-stories/client-stories.module';
import { InTheNewsModule } from './in-the-news/in-the-news.module';
import { CareersModule } from './careers/careers.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent
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
    CareersModule,
    ContactUsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
