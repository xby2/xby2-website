import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { CareerDetailComponent } from './career-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FrequentlyAskedQuestionsComponent } from './component/frequently-asked-questions/frequently-asked-questions.component';
import { CareerDetailsActionItemsComponent } from './component/career-details-action-items/career-details-action-items.component';
import { MeetOurPeopleSectionComponent } from './component/meet-our-people-section/meet-our-people-section.component';
import { OurValuesSectionComponent } from './component/our-values-section/our-values-section.component';
import { PerksSectionComponent } from './component/perks-section/perks-section.component';
import { PerksResolver } from './resolver/perks.resolver';
import { OpenPositionsResolver } from './resolver/open-positions.resolver';
import { RecruitingValueService } from './service/recruiting-value.service';
import { RecruitingValuesResolver } from './resolver/recruiting-values.resolver';
import { OpenPositionResolver } from './resolver/open-position.resolver';
import { PerkService } from './service/perk.service';
import { OpenPositionsSectionComponent } from './component/open-positions-section/open-positions-section.component';
import { FrequentlyAskedQuestionsResolver } from './resolver/frequently-asked-questions.resolver';
import { FrequentlyAskedQuestionService } from './service/frequently-asked-question.service';
import { FrequentlyAskedQuestionComponent } from './component/frequently-asked-question/frequently-asked-question.component';

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
    PerksSectionComponent,
    OpenPositionsSectionComponent,
    FrequentlyAskedQuestionComponent,
  ],
  providers: [
    PerksResolver,
    OpenPositionsResolver,
    RecruitingValueService,
    RecruitingValuesResolver,
    OpenPositionResolver,
    PerkService,
    FrequentlyAskedQuestionsResolver,
    FrequentlyAskedQuestionService
  ],
  exports: [
    CareersComponent,
    CareerDetailComponent
  ]
})
export class CareersModule { }
