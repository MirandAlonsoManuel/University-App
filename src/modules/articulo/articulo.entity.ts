import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import { Profesor } from "../profesor/profesor.entity";

@Entity()
export class Articulo{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: false })
    autor: string;

    @Column({ nullable: false })
    año: number;

    @Column({ nullable: false })
    revista: string;

    @Column({ nullable: false })
    numero: number;

    @Column({ nullable: false })
    volumen: number;

    @Column({ nullable: false })
    paginas: number;

    @Column({ nullable: false })
    linka: string;

    @ManyToOne(type => Profesor, profesor => profesor.articulos, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}