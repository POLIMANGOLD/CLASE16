import { Subject } from "rxjs";
import { Alumnos } from "src/app/alumnos/alumnos.component";
import { Cursos } from "src/app/cursos/models";
import { Subjects } from "src/app/subjects";

export interface inscription
{
    id: number;
    studentId:number;
    courseId: number;
    subjectId: number
}

export interface InscriptionWhitStudent extends inscription {
    student: Alumnos
}

export interface InscriptionWhitSubject extends inscription {
 subject: Subjects;
}

export interface InscriptionWhitCourse extends inscription {
    course: Cursos;
}

export type InscriptionWithAll =  InscriptionWhitStudent & InscriptionWhitSubject & InscriptionWhitCourse