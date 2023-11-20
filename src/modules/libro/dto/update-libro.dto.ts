import { IsString, IsNumber } from "class-validator";

export class UpdateLibroDto {
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
}