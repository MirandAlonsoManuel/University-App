import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ProfesoresService } from './profesor.service';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto, PaginationQueryDto, UpdateProfesorDto } from './dto';

@Controller('profesors')
export class ProfesoresController {

    constructor(private readonly profesorService: ProfesoresService){}

    @Get()
    getProfesores(@Query() pagination: PaginationQueryDto): Promise<Profesor[]> {
        return this.profesorService.getProfesores(pagination);
    }

    @Get(':id')
    getProfesor(@Param('id') id: number): Promise<Profesor>{
        return this.profesorService.getProfesor(id);
    }

    @Post()
    createProfesor(@Body() profesor: CreateProfesorDto): Promise<Profesor> {
        return this.profesorService.createProfesor(profesor);
    }

    @Patch(':id')
    updateProfesor(
        @Param('id') id: number,
         @Body() profesor: UpdateProfesorDto,
         ): Promise<Profesor> {
        return this.profesorService.updateProfesor(id, profesor);
    }

    @Delete(':id')
    removeProfesor(@Param('id') id: number): Promise<void> {
        return this.profesorService.removeProfesor(id);
    }
}