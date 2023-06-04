import { Subjects } from "src/app/subjects";

export interface Cursos {
    id:number;
    subjectId:number;
    fechaIni:Date;
    fechaFin:Date;
  };

  export interface cursoWithSubject extends Cursos {
    subject: Subjects;
  }