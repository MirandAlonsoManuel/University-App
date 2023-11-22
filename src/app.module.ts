import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfesorsModule } from './modules/profesor/profesor.module';
import { ArticulosModule } from './modules/articulo/articulo.module';
import { EventosModule } from "./modules/evento/evento.module";
import { PremiosModule } from "./modules/premio/premio.module";
import { ProyectosModule } from "./modules/proyecto/proyecto.module";
import { TutoriasModule } from "./modules/tutoria/tutoria.module"
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProfesorsModule,
    ArticulosModule,
    EventosModule,
    PremiosModule,
    ProyectosModule,
    TutoriasModule,
    DatabaseModule
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService){
    AppModule.port = +this.configService.get('PORT');
  }
}
