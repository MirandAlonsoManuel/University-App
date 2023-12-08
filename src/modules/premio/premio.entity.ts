import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

import { Profesor } from "../profesor/profesor.entity";

@Entity()
export class Premio{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: false })
    otorgante: string;

    @Column({ nullable: false })
    año: number;

    @Column({ nullable: false })
    relevancia: string;

    @ManyToOne(type => Profesor, profesor => profesor.premios, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}