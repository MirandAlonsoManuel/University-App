import { IsString, IsBoolean } from "class-validator";

export class UpdateTutoriaDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly autor: string;

    @IsString()
    readonly tipo_tesis: string;

    @IsBoolean()
    readonly estado: boolean;
}