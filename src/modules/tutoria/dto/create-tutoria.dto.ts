import { IsObject, IsString, IsBoolean } from "class-validator";

import { Profesor } from "src/modules/profesor/entities";

export class CreateTutoriaDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsString()
    readonly tipo_tesis: string;

    @IsBoolean()
    readonly estado: boolean;

    @IsObject()
    readonly profesor: Partial<Profesor>;
}