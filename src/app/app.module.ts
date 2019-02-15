import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { MediaModule } from './media/media.module';
import { ClientStoriesModule } from './client-stories/client-stories.module';
import { InTheNewsModule } from './in-the-news/in-the-news.module';
import { CareersModule } from './careers/careers.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { CoreModule } from './core/core.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './caching/caching-interceptor';
import { MediaComponent } from './media/media.component';

/** Http interceptor providers  */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];
@NgModule({
  declarations: [AppComponent, MediaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    AboutUsModule,
    MediaModule,
    ClientStoriesModule,
    InTheNewsModule,
    CareersModule,
    ContactUsModule,
    CoreModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
