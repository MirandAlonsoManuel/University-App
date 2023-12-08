import { IsObject, IsString, IsNumber } from "class-validator";

import { Profesor } from "src/modules/profesor/profesor.entity";

export class CreateArticuloDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsNumber()
    readonly año: number;

    @IsString()
    readonly revista: string;

    @IsNumber()
    readonly numero: number;

    @IsNumber()
    readonly volumen: number;

    @IsNumber()
    readonly paginas: number;

    @IsString()
    readonly linka: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}