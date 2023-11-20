import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Profesor } from './entities';

@Module({
    imports: [TypeOrmModule.forFeature([Profesor])]
})
export class ProfesorsModule {}