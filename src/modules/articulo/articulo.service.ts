import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Articulo } from './articulo.entity';
import { CreateArticuloDto, UpdateArticuloDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class ArticulosService {

    constructor(
        @InjectRepository(Articulo) private readonly articuloRepository: Repository<Articulo>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getArticulos({ limit, offset }: PaginationQueryDto): Promise<Articulo[]> {
            return await this.articuloRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getArticulo(id: number): Promise<Articulo> {
            const articulo: Articulo = await this.articuloRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!articulo){
                throw new NotFoundException("Resource Not Found");
            }
    
            return articulo;
        }

        async createArticulo({titulo, autor, año, revista, numero, volumen, paginas, linka, profesor}: CreateArticuloDto) {
            const articulo: Articulo = this.articuloRepository.create({titulo, autor, año, revista, numero, volumen, paginas, linka, profesor});
            return this.articuloRepository.save(articulo);
        }

        async updateArticulo(id: number, {titulo, autor, año, revista, numero, volumen, paginas, linka}: UpdateArticuloDto) {
            const articulo: Articulo = await this.articuloRepository.preload({
                id,
                titulo,
                autor, 
                año, 
                revista,
                numero, 
                volumen,
                paginas, 
                linka
            })
    
            if(!articulo){
                throw new NotFoundException('Resource not found');
            }
    
            return articulo;
        }

        async removeArticulo(id: number): Promise<void> {
            const articulo: Articulo = await this.articuloRepository.findOneBy({id: id});
    
            if (!articulo) {
                throw new NotFoundException('Resource not found');
            }
    
            this.articuloRepository.remove(articulo);
        }

}