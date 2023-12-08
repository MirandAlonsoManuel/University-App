import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import { Profesor } from "../profesor/profesor.entity";

@Entity()
export class Libro{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: false })
    autor: string;

    @Column({ nullable: false })
    año: number;

    @Column({ nullable: false })
    editorial: string;

    @Column({ nullable: false })
    numero_edicion: number;

    @Column({ nullable: false })
    paginas: string;

    @Column({ nullable: false })
    link: string;

    @ManyToOne(type => Profesor, profesor => profesor.libros, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}