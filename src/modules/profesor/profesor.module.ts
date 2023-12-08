import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Profesor } from './profesor.entity';
import { Libro } from '../libro/libro.entity';
import { Articulo } from '../articulo/articulo.entity';
import { Evento } from '../evento/evento.entity';
import { Premio } from '../premio/premio.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Tutoria } from '../tutoria/tutoria.entity';
import { ProfesoresController } from './profesor.controller';
import { ProfesoresService } from './profesor.service';

@Module({
    imports: [TypeOrmModule.forFeature([Profesor, Libro, Articulo, Evento, Premio, Proyecto, Tutoria])],
    controllers: [ProfesoresController],
    providers: [ProfesoresService]
})
export class ProfesorsModule {}