import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';

import { LibrosController } from './libro.controller';
import { LibrosService } from './libro.service';
import { Profesor } from '../profesor/profesor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Libro, Profesor])],
    controllers: [LibrosController],
    providers: [LibrosService]
})
export class LibrosModule {}