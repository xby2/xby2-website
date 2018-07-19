import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientStoriesComponent } from './client-stories.component';
import { ClientStoryDetailComponent } from './client-story-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ClientStoriesResolver } from './resolver/client-stories.resolver.';
import { ClientStoryResolver } from './resolver/client-story.resolver';
import { ClientStoryService } from '../shared/service/client-story.service';
import { IndustryResolver } from '../shared/resolver/industry.resolver';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ClientStoriesComponent,
    ClientStoryDetailComponent
  ],
  providers: [
    ClientStoryService,
    ClientStoriesResolver,
    ClientStoryResolver,
    IndustryResolver
  ],
  exports: [
    ClientStoriesComponent,
    ClientStoryDetailComponent
  ]
})
export class ClientStoriesModule { }
