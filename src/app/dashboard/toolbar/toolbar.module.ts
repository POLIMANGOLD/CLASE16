import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AlumnosModule } from '../../alumnos/alumnos.module';
import { DirectivasModule } from '../../shared/directivas/directivas.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { AlumnosComponent } from 'src/app/alumnos/alumnos.component';
import { AlumnosDetalleComponent } from 'src/app/alumnos/pages/alumnos-detalle/alumnos-detalle.component';
import { CursosComponent } from 'src/app/cursos/cursos.component';
import { PagescursosDetallesComponent } from 'src/app/cursos/pagescursos-detalles/pagescursos-detalles.component';






MatSidenavModule
@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    AlumnosModule,
    DirectivasModule,
    MatListModule,
    RouterModule.forChild ([
      {
        path: 'alumnos',
        children:[{
           path: '',
           component: AlumnosComponent,
        },
        {
          path: ':id',
          component: AlumnosDetalleComponent,
        }
    
        ]
      },
      {
        path: 'cursos',
        children:[{
          path: '',
          component: CursosComponent,
       },
       {
         path: ':id',
         component: PagescursosDetallesComponent,
       }
    
       ]
     },

    ])
    
    
    
  ], 
  exports:[
    ToolbarComponent
  ] 
})
export class ToolbarModule { }
