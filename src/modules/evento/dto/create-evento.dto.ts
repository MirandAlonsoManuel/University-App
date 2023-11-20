import { IsObject, IsString, IsDate } from "class-validator";

import { Profesor } from "src/modules/profesor/entities";

export class CreateEventoDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsDate()
    readonly fecha: Date;

    @IsString()
    readonly pais: string;

    @IsString()
    readonly relevancia: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}