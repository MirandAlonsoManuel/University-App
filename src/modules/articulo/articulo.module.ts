import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articulo } from './articulo.entity';

import { ArticulosController } from './articulo.controller';
import { ArticulosService } from './articulo.service';
import { Profesor } from '../profesor/profesor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Articulo, Profesor])],
    controllers: [ArticulosController],
    providers: [ArticulosService]
})
export class ArticulosModule {}