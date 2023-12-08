import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProfesorDto, UpdateProfesorDto, PaginationQueryDto } from './dto';
import { Profesor } from './profesor.entity';

@Injectable()
export class ProfesoresService {

    constructor(
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>,
        ) {}

        async getProfesores({ limit, offset }: PaginationQueryDto): Promise<Profesor[]> {
            return await this.profesorRepository.find({skip: offset, take: limit});
        }

        async getProfesor(id: number): Promise<Profesor> {
            const profesor: Profesor = await this.profesorRepository.findOne({
                where: {
                    id: id
                }
            });

            if(!profesor){
                throw new NotFoundException("Resource Not Found");
            }
    
            return profesor;
        }

        async createProfesor({nombre_apellido, dpto, grupo_inv}: CreateProfesorDto) {
            const profesor: Profesor = this.profesorRepository.create({nombre_apellido, dpto, grupo_inv});
            return this.profesorRepository.save(profesor);
        }

        async updateProfesor(id: number, {nombre_apellido, dpto, grupo_inv}: UpdateProfesorDto) {
            const profesor: Profesor = await this.profesorRepository.preload({
                nombre_apellido,
                dpto,
                grupo_inv
            })
    
            if(!profesor){
                throw new NotFoundException('Resource not found');
            }
    
            return profesor;
        }

        async removeProfesor(id: number): Promise<void> {
            const profesor: Profesor = await this.profesorRepository.findOneBy({id: id});
    
            if (!profesor) {
                throw new NotFoundException('Resource not found');
            }
    
            this.profesorRepository.remove(profesor);
        }

}