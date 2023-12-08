import { IsObject, IsString, IsNumber } from "class-validator";

import { Profesor } from "src/modules/profesor/profesor.entity";

export class CreateLibroDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsNumber()
    readonly año: number;

    @IsString()
    readonly editorial: string;

    @IsNumber()
    readonly numero_edicion: number;

    @IsString()
    readonly paginas: string;

    @IsString()
    readonly link: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}