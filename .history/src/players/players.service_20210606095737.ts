import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerCharacter } from './player-character.enum';
import { CreatePlayerDto } from './dto/create-player.dto';
import { GetPlayersFilterDto } from './dto/get-players-filter.dto';
import { PlayersRepository } from './players.repository';
import { Player } from './player.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(PlayersRepository)
    private playersRepository: PlayersRepository,
  ) {}
  // getAllPlayers(): Player[] {
  //   return this.players;
  // }
  // getPlayersWithFilters(filterDto: GetPlayersFilterDto): Player[] {
  //   const { search, character } = filterDto;
  //   let players = this.getAllPlayers();
  //   if (search) {
  //     players = players.filter((p) => p.playerName.includes(search));
  //   }
  //   if (character) {
  //     players = players.filter((p) => p.character === character);
  //   }
  //   return players;
  // }
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

  async deletePlayer(id: string): void {
    const found = await this.playersRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Player with ID: ${id} not found`);
    }
    this.playersRepository.delete(id);
  }

  // updatePlayerCharacter(id: string, character: PlayerCharacter): Player {
  //   const player = this.getPlayerById(id);
  //   player.character = PlayerCharacter[character];
  //   return player;
  // }
}
