import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { LibrosService } from './libro.service';
import { Libro } from './libro.entity';
import { CreateLibroDto, PaginationQueryDto, UpdateLibroDto } from './dto';

@Controller('libros')
export class LibrosController {

    constructor(private readonly libroService: LibrosService){}

    @Get()
    getLibros(@Query() pagination: PaginationQueryDto): Promise<Libro[]> {
        return this.libroService.getLibros(pagination);
    }

    @Get(':id')
    getLibro(@Param('id') id: number): Promise<Libro>{
        return this.libroService.getLibro(id);
    }

    @Post()
    createLibro(@Body() libro: CreateLibroDto): Promise<Libro> {
        return this.libroService.createLibro(libro);
    }

    @Patch(':id')
    updateLibro(
        @Param('id') id: number,
         @Body() libro: UpdateLibroDto,
         ): Promise<Libro> {
        return this.libroService.updateLibro(id, libro);
    }

    @Delete(':id')
    removelibro(@Param('id') id: number): Promise<void> {
        return this.libroService.removeLibro(id);
    }
}