import { Subject } from "rxjs";
import { Alumnos } from "src/app/alumnos/alumnos.component";
import { Cursos } from "src/app/cursos/models";
import { Subjects } from "src/app/subjects";

export interface Inscription
{
    id: number;
    studentId:number;
    courseId: number;
    subjectId: number
}

export interface InscriptionWhitStudent extends Inscription {
    student: Alumnos
}

export interface InscriptionWhitSubject extends Inscription {
 subject: Subjects;
}

export interface InscriptionWhitCourse extends Inscription {
    course: Cursos;
}

export type InscriptionWithAll =  InscriptionWhitStudent & InscriptionWhitSubject & InscriptionWhitCourse