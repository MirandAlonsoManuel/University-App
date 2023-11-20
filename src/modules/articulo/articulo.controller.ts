import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ArticulosService } from './articulo.service';
import { Articulo } from './articulo.entity';
import { CreateArticuloDto, PaginationQueryDto, UpdateArticuloDto } from './dto';

@Controller('articulos')
export class ArticulosController {

    constructor(private readonly articuloService: ArticulosService){}

    @Get()
    getArticulos(@Query() pagination: PaginationQueryDto): Promise<Articulo[]> {
        return this.articuloService.getArticulos(pagination);
    }

    @Get(':id')
    getArticulo(@Param('id') id: number): Promise<Articulo>{
        return this.articuloService.getArticulo(id);
    }

    @Post()
    createArticulo(@Body() articulo: CreateArticuloDto): Promise<Articulo> {
        return this.articuloService.createArticulo(articulo);
    }

    @Patch(':id')
    updateArticulo(
        @Param('id') id: number,
         @Body() articulo: UpdateArticuloDto,
         ): Promise<Articulo> {
        return this.articuloService.updateArticulo(id, articulo);
    }

    @Delete(':id')
    removeArticulo(@Param('id') id: number): Promise<void> {
        return this.articuloService.removeArticulo(id);
    }
}