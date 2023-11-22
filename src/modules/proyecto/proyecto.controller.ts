import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ProyectosService } from './proyecto.service';
import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto, PaginationQueryDto, UpdateProyectoDto } from './dto';

@Controller('proyectos')
export class ProyectosController {

    constructor(private readonly proyectoService: ProyectosService){}

    @Get()
    getProyectos(@Query() pagination: PaginationQueryDto): Promise<Proyecto[]> {
        return this.proyectoService.getProyectos(pagination);
    }

    @Get(':id')
    getProyecto(@Param('id') id: number): Promise<Proyecto>{
        return this.proyectoService.getProyecto(id);
    }

    @Post()
    createProyecto(@Body() proyecto: CreateProyectoDto): Promise<Proyecto> {
        return this.proyectoService.createProyecto(proyecto);
    }

    @Patch(':id')
    updateProyecto(
        @Param('id') id: number,
         @Body() proyecto: UpdateProyectoDto,
         ): Promise<Proyecto> {
        return this.proyectoService.updateProyecto(id, proyecto);
    }

    @Delete(':id')
    removeProyecto(@Param('id') id: number): Promise<void> {
        return this.proyectoService.removeProyecto(id);
    }
}