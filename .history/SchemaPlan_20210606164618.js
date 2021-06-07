const schema = {
  game: [
    users: [Player, Player],
    board: Board,

  ]
  players: [
    {
      id: 1,
      avatar: 'url',
      money: 12,
      bettingCards: [
        {
          color: 2, // 1 blue, 2 yellow, 3 green, 4 orange, 5 white
          playerId,
        },
      ],
    },
  ],
  legBets: [
    {
      value: 1,
      horse: null,
      playerId: 1,
    },
  ],
  raceBets: [
    {
      color: 1,
      playerId: 2,
      win: true,
    },
  ],
  board: [
    // x 16
    {
      colors: [1, 3],
      desert: 1, // null none, 1 forward, 2 backward
      noDesert: false,
    },
  ],
  legDice: {
    rolled: [1, 3],
    unrolled: [2, 4, 5],
  },
};

// Player
//   create
//   update
//     Money
//     BettingCards
// LegBet
//   create
//   update
//   static clear
// RaceBet
//   create
//   update
// Board
//   update
// Dice
//   update
