import { Component, OnInit } from '@angular/core';
import { InscripcionesServicesService } from './services/inscripciones-services.service';
import {  Store } from '@ngrx/store';
import { InscripcionesActions } from './store/inscripciones.actions';
import { Observable } from 'rxjs';
import { selectInscripcionesState } from './store/inscripciones.selectors';
import { State } from './store/inscripciones.reducer';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  state$: Observable <State>;
  constructor (private inscripcionesService: InscripcionesServicesService,
    private store: Store,) 
    {
       this.state$ = this.store.select (selectInscripcionesState);
    }
  ngOnInit(): void {
    this.inscripcionesService.getAllInscriptions().subscribe(console.log);
    this.store.dispatch (InscripcionesActions.loadInscripciones ())

}}
