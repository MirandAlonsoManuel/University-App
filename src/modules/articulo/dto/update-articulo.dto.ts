import { IsString, IsNumber } from "class-validator";

export class UpdateArticuloDto {
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
}