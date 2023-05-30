import { NgPluralCase } from '@angular/common';
import { Component } from '@angular/core';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosServiciosService } from '../core/servicios/alumnos-servicios.service';
import { TimeService, Time } from '../core/servicios/time.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


export interface Alumnos {
  id:number;
  nombre: string;
  apellido: string;
  curso: number;
  carrera: string
}
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
[x: string]: any;


dataSource= new MatTableDataSource <Alumnos>

displayedColumns: string [] = [ "id" , "nombreCompleto", "curso", "carrera", "eliminar", "ver_detalle"]

horaActual$: Observable <String>;

constructor ( private matDialog: MatDialog,
  private alumnosService: AlumnosServiciosService,
  private timeService: TimeService,
  private router: Router){
    this.alumnosService.obtenerAlumno
    .subscribe ((Alumnos) => {this.dataSource.data = Alumnos})
    this.horaActual$ = this.timeService.reloj; 
  }

crearAlumno (): void{
const dialog = this.matDialog.open ( AbmAlumnosComponent)


dialog.afterClosed().subscribe((valor) => {
if(valor){
  this.dataSource.data = [...this.dataSource.data,

    {
     ...valor,
     id: this.dataSource.data.length + 1,

    }
    
    
    
    ]
}
}
)} 

irAlDetalle (alumnoId: number) : void{
  this.router.navigate(['dashboard', 'alumnos' , alumnoId])
}


eliminarAlumno (alumnoParaEliminar: Alumnos): void{
  this.dataSource.data = this.dataSource.data.filter(

    (alumnoActual) => alumnoActual.id !== alumnoParaEliminar.id,
  );

}


}


