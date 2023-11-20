import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './evento.entity';

import { EventosController } from './evento.controller';
import { EventosService } from './evento.service';
import { Profesor } from '../profesor/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Evento, Profesor])],
    controllers: [EventosController],
    providers: [EventosService]
})
export class EventosModule {}