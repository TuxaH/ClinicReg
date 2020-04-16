import {NgModule} from '@angular/core';
import {OnlyWordsDirective} from '../directives/only-words.directive';
import {MomentPipe} from '../pipes/moment.pipe';

@NgModule({
  declarations: [
    OnlyWordsDirective,
    MomentPipe
  ],
  imports: [],
  exports: [
    OnlyWordsDirective,
    MomentPipe
  ]
})
export class DirectivesAndPipesModule {}
