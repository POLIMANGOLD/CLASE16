import { Component, OnInit } from '@angular/core';
import { InscripcionesServicesService } from './services/inscripciones-services.service';
import {  Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { Observable } from 'rxjs';
import { selectInscripcionesState } from './store/inscripciones.selectors';
import { State } from './store/inscripciones.reducer';
import { Inscription } from './models';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  state$: Observable <State>;
  dataSource = new MatTableDataSource <Inscription>

  constructor (private inscripcionesService: InscripcionesServicesService,
    private store: Store,
  
   ) 
    {
       this.state$ = this.store.select (selectInscripcionesState);
    }
  ngOnInit(): void {
   // this.inscripcionesService.getAllInscriptions().subscribe(console.log);
    this.store.dispatch (InscripcionesActions.loadInscripciones ())
    this.inscripcionesService.getAllInscriptions()
}

eliminarInscripcionPorId (id: number): void {
  this.store.dispatch (InscripcionesActions.deleteInscripcion ({id}))
}



}
