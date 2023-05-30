import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {

    nombreControl =new FormControl ("",[Validators.required])
    apellidoControl =new FormControl ("",[Validators.required])
    cursoControl =new FormControl ("",[Validators.required])
    carreraControl =new FormControl ("",[Validators.required])


 alumnosForm = new FormGroup ({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    curso: this.cursoControl,
    carrera: this.carreraControl
  })

  constructor(private  diaLogRef: MatDialogRef <AbmAlumnosComponent>){}

  guardar(): void{
    if (this.alumnosForm.valid){
    this.diaLogRef.close (this.alumnosForm.value)
    }else {
      this.alumnosForm.markAllAsTouched();
    }
  }
}
