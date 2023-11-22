import { IsObject, IsString } from "class-validator";

import { Profesor } from "src/modules/profesor/entities";

export class CreateProyectoDto {
    @IsString()
    readonly nombre: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}