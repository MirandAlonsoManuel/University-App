import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Premio } from './premio.entity';

import { PremiosController } from './premio.controller';
import { PremiosService } from './premio.service';
import { Profesor } from '../profesor/profesor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Premio, Profesor])],
    controllers: [PremiosController],
    providers: [PremiosService]
})
export class PremiosModule {}