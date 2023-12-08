import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Premio } from './premio.entity';
import { CreatePremioDto, UpdatePremioDto, PaginationQueryDto } from './dto';
import { Profesor } from '../profesor/profesor.entity';

@Injectable()
export class PremiosService {

    constructor(
        @InjectRepository(Premio) private readonly premioRepository: Repository<Premio>,
        @InjectRepository(Profesor) private readonly profesorRepository: Repository<Profesor>
        ) {}

        async getPremios({ limit, offset }: PaginationQueryDto): Promise<Premio[]> {
            return await this.premioRepository.find({relations: ['profesor'], skip: offset, take: limit});
        }

        async getPremio(id: number): Promise<Premio> {
            const premio: Premio = await this.premioRepository.findOne({
                where: {
                    id: id
                },
                relations: ['profesor']
            });

            if(!premio){
                throw new NotFoundException("Resource Not Found");
            }
    
            return premio;
        }

        async createPremio({titulo, otorgante, año, relevancia, profesor}: CreatePremioDto) {
            const premio: Premio = this.premioRepository.create({titulo, otorgante, año, relevancia, profesor});
            return this.premioRepository.save(premio);
        }

        async updatePremio(id: number, {titulo, otorgante, año, relevancia}: UpdatePremioDto) {
            const premio: Premio = await this.premioRepository.preload({
                id,
                titulo,
                otorgante, 
                año, 
                relevancia
            })
    
            if(!premio){
                throw new NotFoundException('Resource not found');
            }
    
            return premio;
        }

        async removePremio(id: number): Promise<void> {
            const premio: Premio = await this.premioRepository.findOneBy({id: id});
    
            if (!premio) {
                throw new NotFoundException('Resource not found');
            }
    
            this.premioRepository.remove(premio);
        }

}