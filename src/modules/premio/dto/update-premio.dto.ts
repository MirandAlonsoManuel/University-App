import { IsString, IsNumber } from "class-validator";

export class UpdatePremioDto {
    @IsString()
    readonly titulo: string;

    @IsString()
    readonly otorgante: string;

    @IsNumber()
    readonly año: number;

    @IsString()
    readonly relevancia: string;

}