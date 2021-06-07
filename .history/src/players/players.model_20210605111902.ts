export interface Player {
  id: number;
  name: string;
  character: PlayerCharacter;
  money: number;
}

enum PlayerCharacter {
  DONNA = 'DONNA',
  JEFF = 'JEFF',
}
