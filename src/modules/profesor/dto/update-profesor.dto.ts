import { IsString, IsNumber } from "class-validator";

export class UpdateProfesorDto {
    @IsString()
    readonly nombre_apellido: string;

    @IsString()
    readonly dpto: string;

    @IsString()
    readonly grupo_inv: string;

}