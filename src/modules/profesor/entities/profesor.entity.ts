import { 
    Entity,
    Column,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Proyecto } from "../../proyecto/proyecto.entity";
import { Premio } from "../../premio/premio.entity";
import { Libro } from "../../libro/libro.entity";
import { Articulo } from "../../articulo/articulo.entity";
import { Evento } from "../../evento/evento.entity";
import { Tutoria } from "../../tutoria/tutoria.entity";

@Entity()
export class Profesor{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    nombre_apellido: string;

    @Column({ nullable: false })
    dpto: string;

    @Column({ nullable: false })
    grupo_inv: string;

    @OneToMany(type => Proyecto, (proyecto) => proyecto.profesor)
    proyectos: Proyecto[];

    @OneToMany(type => Premio, (premio) => premio.profesor)
    premios: Premio[];

    @OneToMany(type => Libro, (libro) => libro.profesor)
    libros: Libro[];

    @OneToMany(type => Articulo, (articulo) => articulo.profesor)
    articulos: Articulo[];

    @OneToMany(type => Evento, (evento) => evento.profesor)
    eventos: Evento[];

    @OneToMany(type => Tutoria, (tutoria) => tutoria.profesor)
    tutorias: Tutoria[];
}