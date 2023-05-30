import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { LoginComponent } from './login/login.component';
import { AlumnosDetalleComponent } from './alumnos/pages/alumnos-detalle/alumnos-detalle.component';
import { CursosComponent } from './cursos/cursos.component';
import { PagescursosDetallesComponent } from './cursos/pagescursos-detalles/pagescursos-detalles.component';
import { LoginGuard } from './login/guards/login.guard';


const routes: Routes= [
{
path: 'dashboard',
canActivate:[LoginGuard],
component: ToolbarComponent,
loadChildren: () => import ('./dashboard/toolbar/toolbar.module').then ((m) => m.ToolbarModule)
},

{
  path: 'login',
  component: LoginComponent,
 
},

{
  path: '**',
  redirectTo: 'dashboard',
}
]



@NgModule({

  imports: [
    RouterModule.forRoot (routes)
  ],

  exports: [
    RouterModule

  ]
})
export class AppRoutingModule { }
