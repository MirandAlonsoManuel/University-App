import { IsString, IsNumber } from "class-validator";

export class UpdateProyectoDto {
    @IsString()
    readonly nombre: string;
}