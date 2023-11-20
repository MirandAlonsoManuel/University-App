import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfesorsModule } from './modules/profesor/profesor.module';
import { ArticulosModule } from './modules/articulo/articulo.module';
import { EventosModule } from './modules/evento/evento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProfesorsModule,
    ArticulosModule,
    EventosModule,
  ],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService){
    AppModule.port = +this.configService.get('PORT');
  }
}
