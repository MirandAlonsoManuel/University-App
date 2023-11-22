import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tutoria } from './tutoria.entity';

import { TutoriasController } from './tutoria.controller';
import { TutoriasService } from './tutoria.service';
import { Profesor } from '../profesor/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Tutoria, Profesor])],
    controllers: [TutoriasController],
    providers: [TutoriasService]
})
export class TutoriasModule {}