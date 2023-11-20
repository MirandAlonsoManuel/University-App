import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";

import { Profesor } from "../profesor/entities/profesor.entity";

@Entity()
export class Evento{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: false })
    autor: string;

    @CreateDateColumn()
    fecha: Date;

    @Column({ nullable: false })
    pais: string;

    @Column({ nullable: false })
    relevancia: string;

    @ManyToOne(type => Profesor, profesor => profesor.eventos, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}