import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { PremiosService } from './premio.service';
import { Premio } from './premio.entity';
import { CreatePremioDto, PaginationQueryDto, UpdatePremioDto } from './dto';

@Controller('premios')
export class PremiosController {

    constructor(private readonly premioService: PremiosService){}

    @Get()
    getPremios(@Query() pagination: PaginationQueryDto): Promise<Premio[]> {
        return this.premioService.getPremios(pagination);
    }

    @Get(':id')
    getPremio(@Param('id') id: number): Promise<Premio>{
        return this.premioService.getPremio(id);
    }

    @Post()
    createPremio(@Body() premio: CreatePremioDto): Promise<Premio> {
        return this.premioService.createPremio(premio);
    }

    @Patch(':id')
    updatePremio(
        @Param('id') id: number,
         @Body() premio: UpdatePremioDto,
         ): Promise<Premio> {
        return this.premioService.updatePremio(id, premio);
    }

    @Delete(':id')
    removePremio(@Param('id') id: number): Promise<void> {
        return this.premioService.removePremio(id);
    }
}