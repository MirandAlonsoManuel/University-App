import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Libro } from './libro.entity';
import { CreateLibroDto, UpdateLibroDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getLibros({ limit, offset }: PaginationQueryDto): Promise<Libro[]> {
            return await this.libroRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getLibro(id: number): Promise<Libro> {
            const libro: Libro = await this.libroRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!libro){
                throw new NotFoundException("Resource Not Found");
            }
    
            return libro;
        }

        async createLibro({titulo, autor, año, editorial, numero_edicion, paginas, link, profesor}: CreateLibroDto) {
            const libro: Libro = this.libroRepository.create({titulo, autor, año, editorial, numero_edicion, paginas, link, profesor});
            return this.libroRepository.save(libro);
        }

        async updateLibro(id: number, {titulo, autor, año, editorial, numero_edicion, paginas, link}: UpdateLibroDto) {
            const libro: Libro = await this.libroRepository.preload({
                id,
                titulo,
                autor, 
                año, 
                editorial,
                numero_edicion,
                paginas, 
                link
            })
    
            if(!libro){
                throw new NotFoundException('Resource not found');
            }
    
            return libro;
        }

        async removeLibro(id: number): Promise<void> {
            const libro: Libro = await this.libroRepository.findOneBy({id: id});
    
            if (!libro) {
                throw new NotFoundException('Resource not found');
            }
    
            this.libroRepository.remove(libro);
        }

}