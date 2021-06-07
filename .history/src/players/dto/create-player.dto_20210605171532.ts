import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @isNotEmpty()
  playerName: string;

  @isNotEmpty()
  character: string;
}