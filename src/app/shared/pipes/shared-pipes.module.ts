import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerptPipe } from './excerpt.pipe';

const pipes = [
  ExcerptPipe
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: pipes,
  exports: pipes
})
export class SharedPipesModule { }
