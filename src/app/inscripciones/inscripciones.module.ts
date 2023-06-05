import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionesFeature } from './store/inscripciones.reducer';
import {  MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { InscripcionesDialogComponent } from './component/inscripciones-dialog/inscripciones-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    EffectsModule.forFeature([InscripcionesEffects]),
    StoreModule.forFeature (inscripcionesFeature),
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class InscripcionesModule { }
