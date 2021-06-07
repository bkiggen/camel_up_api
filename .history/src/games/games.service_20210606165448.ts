import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerCharacter } from './player-character.enum';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { PlayersRepository } from './games.repository';
import { Player } from './games.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersRepository)
    private playersRepository: PlayersRepository,
  ) {}

  getPlayers(filterDto: GetPlayersFilterDto): Promise<Player[]> {
    return this.playersRepository.getPlayers(filterDto);
  }

  createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersRepository.createPlayer(createPlayerDto);
  }

  async getPlayerById(id: string): Promise<Player> {
    const found = await this.playersRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }

    return found;
  }

  async deletePlayer(id: string): Promise<void> {
    const result = await this.playersRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }
  }

  async updatePlayerCharacter(
    id: string,
    character: PlayerCharacter,
  ): Promise<Player> {
    const player = await this.getPlayerById(id);

    player.character = character;

    await this.playersRepository.save(player);
    return player;
  }
}
