import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Proyecto } from './proyecto.entity';
import { CreateProyectoDto, UpdateProyectoDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class ProyectosService {

    constructor(
        @InjectRepository(Proyecto) private readonly proyectoRepository: Repository<Proyecto>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getProyectos({ limit, offset }: PaginationQueryDto): Promise<Proyecto[]> {
            return await this.proyectoRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getProyecto(id: number): Promise<Proyecto> {
            const proyecto: Proyecto = await this.proyectoRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!proyecto){
                throw new NotFoundException("Resource Not Found");
            }
    
            return proyecto;
        }

        async createProyecto({nombre, profesor}: CreateProyectoDto) {
            const proyecto: Proyecto = this.proyectoRepository.create({nombre, profesor});
            return this.proyectoRepository.save(proyecto);
        }

        async updateProyecto(id: number, {nombre}: UpdateProyectoDto) {
            const proyecto: Proyecto = await this.proyectoRepository.preload({
                id,
                nombre
            })
    
            if(!proyecto){
                throw new NotFoundException('Resource not found');
            }
    
            return proyecto;
        }

        async removeProyecto(id: number): Promise<void> {
            const proyecto: Proyecto = await this.proyectoRepository.findOneBy({id: id});
    
            if (!proyecto) {
                throw new NotFoundException('Resource not found');
            }
    
            this.proyectoRepository.remove(proyecto);
        }

}