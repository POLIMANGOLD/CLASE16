import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { ErroresSmsPipe } from './errores-sms.pipe';



@NgModule({
  declarations: [
    ErroresSmsPipe,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
  
  ],
  exports: [
    ErroresSmsPipe,
    NombreCompletoPipe,
    
  ]
})
export class PipesModule { }
