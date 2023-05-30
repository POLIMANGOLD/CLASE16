import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetrasExtensionDirective } from './letras-extension.directive';



@NgModule({
  declarations: [
    LetrasExtensionDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LetrasExtensionDirective
  ]
})
export class DirectivasModule { }
