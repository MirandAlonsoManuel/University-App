import { IsString, IsDate } from "class-validator";

export class UpdateEventoDto {
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
}