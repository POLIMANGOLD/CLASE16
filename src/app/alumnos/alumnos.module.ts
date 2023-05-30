import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import {MatTableModule} from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from "../shared/pipes/pipes.module";
import { DirectivasModule } from '../shared/directivas/directivas.module';
import { AlumnosDetalleComponent } from './pages/alumnos-detalle/alumnos-detalle.component';






@NgModule({
    declarations: [
        AlumnosComponent,
        AbmAlumnosComponent,
        AlumnosDetalleComponent
    ],
    exports: [
        AlumnosComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        SharedModule,
        PipesModule,
        DirectivasModule,
    ]
})
export class AlumnosModule { }
