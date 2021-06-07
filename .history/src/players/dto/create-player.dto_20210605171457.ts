import { isNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @isNotEmpty()
  playerName: string;
}
