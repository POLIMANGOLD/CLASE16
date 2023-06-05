export interface NavItem {
    path: string;
    title: string;
    icon?: string;
    allowedRoles: string [];
}

 export const links: NavItem [] = [
    {
        path: 'alumnos',
        title: 'Alumnos',
        allowedRoles:[],
    },

    {
        path: 'cursos',
        title: 'Cursos',
        allowedRoles:["admin"],

    },

    {
        path: 'inscripciones',
        title: 'Inscripciones',
        allowedRoles:[],

    }

    
]

export default links;