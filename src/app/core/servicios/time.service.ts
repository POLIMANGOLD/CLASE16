import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface Time{
  horas: number;
  minutos: number;
  segundos: number;
}

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private reloj$ = new BehaviorSubject<Time> (this.horaActual);

  constructor() {
     setInterval(()=>{
      this.reloj$.next (this.horaActual);

     },1000)

   }
  
  get reloj(): Observable <string>{
    return this.reloj$.asObservable()
    .pipe (
      map( (time) => {
        return `${time.horas}: ${time.minutos}: ${time.segundos} `
      }
      )
    )

  }

  get horaActual (): Time{
   const now = new Date ();
     return{
      horas: now.getHours (),
      minutos: now.getMinutes(),
      segundos: now.getSeconds(),
     }


  }
}
