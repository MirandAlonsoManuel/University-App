import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { EventosService } from './evento.service';
import { Evento } from './evento.entity';
import { CreateEventoDto, PaginationQueryDto, UpdateEventoDto } from './dto';

@Controller('eventos')
export class EventosController {

    constructor(private readonly eventoService: EventosService){}

    @Get()
    getEventos(@Query() pagination: PaginationQueryDto): Promise<Evento[]> {
        return this.eventoService.getEventos(pagination);
    }

    @Get(':id')
    getEvento(@Param('id') id: number): Promise<Evento>{
        return this.eventoService.getEvento(id);
    }

    @Post()
    createEvento(@Body() evento: CreateEventoDto): Promise<Evento> {
        return this.eventoService.createEvento(evento);
    }

    @Patch(':id')
    updateEvento(
        @Param('id') id: number,
         @Body() evento: UpdateEventoDto,
         ): Promise<Evento> {
        return this.eventoService.updateEvento(id, evento);
    }

    @Delete(':id')
    removeEvento(@Param('id') id: number): Promise<void> {
        return this.eventoService.removeEvento(id);
    }
}