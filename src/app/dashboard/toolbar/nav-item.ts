interface NavItem {
    path: string;
    title: string;
    icon?: string;
}

const links: NavItem [] = [
    {
        path: 'alumnos',
        title: 'Alumnos',
    },

    {
        path: 'cursos',
        title: 'Cursos',
    },

    {
        path: 'inscripciones',
        title: 'Inscripciones',
    }

    
]

export default links;