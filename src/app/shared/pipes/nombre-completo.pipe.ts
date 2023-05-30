import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from '../../alumnos/alumnos.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumnos, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
    ;
  }

}
