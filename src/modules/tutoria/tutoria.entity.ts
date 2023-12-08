import { 
    Entity,
    Column,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from "typeorm";

import { Profesor } from "../profesor/profesor.entity";

@Entity()
export class Tutoria{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    titulo: string;

    @Column({ nullable: false })
    autor: string;

    @Column({ nullable: false })
    tipo_tesis: string;

    @Column({ nullable: false })
    estado: boolean;

    @ManyToOne(type => Profesor, profesor => profesor.tutorias, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}