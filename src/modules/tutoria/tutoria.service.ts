import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tutoria } from './tutoria.entity';
import { CreateTutoriaDto, UpdateTutoriaDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class TutoriasService {

    constructor(
        @InjectRepository(Tutoria) private readonly tutoriaRepository: Repository<Tutoria>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getTutorias({ limit, offset }: PaginationQueryDto): Promise<Tutoria[]> {
            return await this.tutoriaRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getTutoria(id: number): Promise<Tutoria> {
            const tutoria: Tutoria = await this.tutoriaRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!tutoria){
                throw new NotFoundException("Resource Not Found");
            }
    
            return tutoria;
        }

        async createTutoria({titulo, autor, tipo_tesis, estado, profesor}: CreateTutoriaDto) {
            const tutoria: Tutoria = this.tutoriaRepository.create({titulo, autor, tipo_tesis, estado, profesor});
            return this.tutoriaRepository.save(tutoria);
        }

        async updateTutoria(id: number, {titulo, autor, tipo_tesis, estado}: UpdateTutoriaDto) {
            const tutoria: Tutoria = await this.tutoriaRepository.preload({
                id,
                titulo,
                autor, 
                tipo_tesis,
                estado
            })
    
            if(!tutoria){
                throw new NotFoundException('Resource not found');
            }
    
            return tutoria;
        }

        async removeTutoria(id: number): Promise<void> {
            const tutoria: Tutoria = await this.tutoriaRepository.findOneBy({id: id});
    
            if (!tutoria) {
                throw new NotFoundException('Resource not found');
            }
    
            this.tutoriaRepository.remove(tutoria);
        }

}