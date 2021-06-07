import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './games.controller';
import { PlayersRepository } from './games.repository';
import { PlayersService } from './games.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlayersRepository]), AuthModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
