import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurStoryComponent } from './our-story/our-story.component';
import { OurExpertiseComponent } from './our-expertise/our-expertise.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { OurThoughtsComponent } from './our-thoughts/our-thoughts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { OurWorkDetailComponent } from './our-work/our-work-detail.component';
import { OurThoughtsDetailComponent } from './our-thoughts/our-thoughts-detail.component';
import { OurThoughtsDetailGuard } from './our-thoughts/our-thoughts-detail.guard';
import { ClientStoryResolver } from './our-work/client-story.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-story', component: OurStoryComponent },
  { path: 'our-expertise', component: OurExpertiseComponent },
  { path: 'our-work', component: OurWorkComponent },
  {
    path: 'our-work/:id',
    component: OurWorkDetailComponent,
    resolve: { clientStory: ClientStoryResolver }
  },
  { path: 'our-thoughts', component: OurThoughtsComponent },
  {
    path: 'our-thoughts/:id',
    component: OurThoughtsDetailComponent
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
