import { IsObject, IsString, IsNumber } from "class-validator";

import { Profesor } from "src/modules/profesor/profesor.entity";

export class CreatePremioDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly otorgante: string;

    @IsNumber()
    readonly año: number;

    @IsString()
    readonly relevancia: string;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}