import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TutoriasService } from './tutoria.service';
import { Tutoria } from './tutoria.entity';
import { CreateTutoriaDto, PaginationQueryDto, UpdateTutoriaDto } from './dto';

@Controller('tutorias')
export class TutoriasController {

    constructor(private readonly tutoriaService: TutoriasService){}

    @Get()
    getTutorias(@Query() pagination: PaginationQueryDto): Promise<Tutoria[]> {
        return this.tutoriaService.getTutorias(pagination);
    }

    @Get(':id')
    getTutoria(@Param('id') id: number): Promise<Tutoria>{
        return this.tutoriaService.getTutoria(id);
    }

    @Post()
    createTutoria(@Body() tutoria: CreateTutoriaDto): Promise<Tutoria> {
        return this.tutoriaService.createTutoria(tutoria);
    }

    @Patch(':id')
    updateTutoria(
        @Param('id') id: number,
         @Body() tutoria: UpdateTutoriaDto,
         ): Promise<Tutoria> {
        return this.tutoriaService.updateTutoria(id, tutoria);
    }

    @Delete(':id')
    removeTutoria(@Param('id') id: number): Promise<void> {
        return this.tutoriaService.removeTutoria(id);
    }
}