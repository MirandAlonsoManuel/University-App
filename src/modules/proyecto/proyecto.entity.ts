import { 
    Entity,
    Column,
    ManyToOne,
    PrimaryGeneratedColumn,
    JoinColumn,
} from "typeorm";

import { Profesor } from "../profesor/entities/profesor.entity";

@Entity()
export class Proyecto{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    nombre: string;

    @ManyToOne(type => Profesor, profesor => profesor.proyectos, {cascade: true})
    @JoinColumn({name: "profesor_id"})
    profesor: Profesor;
}