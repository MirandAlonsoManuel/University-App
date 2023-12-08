import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';

import { ProyectosController } from './proyecto.controller';
import { ProyectosService } from './proyecto.service';
import { Profesor } from '../profesor/profesor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Proyecto, Profesor])],
    controllers: [ProyectosController],
    providers: [ProyectosService]
})
export class ProyectosModule {}