import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Evento } from './evento.entity';
import { CreateEventoDto, UpdateEventoDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class EventosService {

    constructor(
        @InjectRepository(Evento) private readonly eventoRepository: Repository<Evento>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getEventos({ limit, offset }: PaginationQueryDto): Promise<Evento[]> {
            return await this.eventoRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getEvento(id: number): Promise<Evento> {
            const evento: Evento = await this.eventoRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!evento){
                throw new NotFoundException("Resource Not Found");
            }
    
            return evento;
        }

        async createEvento({titulo, autor, fecha, pais, relevancia, profesor}: CreateEventoDto) {
            const evento: Evento = this.eventoRepository.create({titulo, autor, fecha, pais, relevancia, profesor});
            return this.eventoRepository.save(evento);
        }

        async updateEvento(id: number, {titulo, autor, fecha, pais, relevancia}: UpdateEventoDto) {
            const evento: Evento = await this.eventoRepository.preload({
                id,
                titulo,
                autor, 
                fecha,
                pais,
                relevancia
            })
    
            if(!evento){
                throw new NotFoundException('Resource not found');
            }
    
            return evento;
        }

        async removeEvento(id: number): Promise<void> {
            const evento: Evento = await this.eventoRepository.findOneBy({id: id});
    
            if (!evento) {
                throw new NotFoundException('Resource not found');
            }
    
            this.eventoRepository.remove(evento);
        }
}