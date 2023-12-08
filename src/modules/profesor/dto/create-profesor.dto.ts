import { IsObject, IsString, IsNumber } from "class-validator";

import { Profesor } from "src/modules/profesor/profesor.entity";

export class CreateProfesorDto {
    @IsString()
    readonly nombre_apellido: string;

    @IsString()
    readonly dpto: string;

    @IsString()
    readonly grupo_inv: string;
}