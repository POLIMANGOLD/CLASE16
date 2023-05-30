import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from '../../alumnos/alumnos.component';


@Injectable({
  providedIn: 'root'
})
export class AlumnosServiciosService {
  private alumnos$ = new BehaviorSubject([
    {
      id: 1,
      nombre: "Paula",
      apellido: "Mangold",
      curso: 1,
      carrera: "Administracion"
    },
  
    {
      id: 2,
      nombre: "Marcos",
      apellido: "Aguirre",
      curso: 2,
      carrera: "Contador"
    },
  
    {
      id: 3,
      nombre: "Juan",
      apellido: "Perez",
      curso: 3,
      carrera: "Abogado"
    },
  ]



  );

  constructor() { }

 get obtenerAlumno(): Observable<Alumnos[]>{
    return this.alumnos$.asObservable();
  }
}
