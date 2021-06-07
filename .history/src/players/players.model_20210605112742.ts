export interface Player {
  id: string;
  playerName: string;
  character: PlayerCharacter;
  money: number;
}

export enum PlayerCharacter {
  DONNA = 'DONNA',
  JEFF = 'JEFF',
}
