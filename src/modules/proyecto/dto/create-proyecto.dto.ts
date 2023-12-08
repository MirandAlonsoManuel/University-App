import { IsObject, IsString } from "class-validator";

import { Profesor } from "src/modules/profesor/profesor.entity";

export class CreateProyectoDto {
    @IsString()
    readonly nombre: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}