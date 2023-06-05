import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, mergeMap, tap } from 'rxjs';
import { Alumnos } from '../../alumnos/alumnos.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const alumno_mocks: Alumnos [] = [
  {
    id: 1,
    nombre: "Paula",
    apellido: "Mangold",
    fechaRegistro: new Date(),
  },

  {
    id: 2,
    nombre: "Marcos",
    apellido: "Aguirre",
    fechaRegistro: new Date(),
   
  },

  {
    id: 3,
    nombre: "Juan",
    apellido: "Perez",
    fechaRegistro: new Date(),

  },
]


@Injectable({
  providedIn: 'root'
})
export class AlumnosServiciosService {
  private alumnos$ = new BehaviorSubject<Alumnos []>([
  ] );

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

 getObtenerAlumno(): Observable<Alumnos[]>{
    return this.httpClient.get<Alumnos[]>('http://localhost:3000/students')
      .pipe(
        tap ((alumno: Alumnos[])=> this.alumnos$.next( alumno )),
        mergeMap(()=> this.alumnos$.asObservable())
  
      )}
}
