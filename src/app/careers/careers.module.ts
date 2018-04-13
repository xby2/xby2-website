import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareerDetailComponent } from './career-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FrequentlyAskedQuestionsComponent } from './component/frequently-asked-questions/frequently-asked-questions.component';
import { CareerDetailsActionItemsComponent } from './component/career-details-action-items/career-details-action-items.component';
import { MeetOurPeopleSectionComponent } from './component/meet-our-people-section/meet-our-people-section.component';
import { OurValuesSectionComponent } from './component/our-values-section/our-values-section.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CareersComponent,
    CareerDetailComponent,
    FrequentlyAskedQuestionsComponent,
    CareerDetailsActionItemsComponent,
    MeetOurPeopleSectionComponent,
    OurValuesSectionComponent,
  ],
  exports: [
    CareersComponent,
    CareerDetailComponent
  ]
})
export class CareersModule { }
