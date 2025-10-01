// const om = ['a','b','c'];
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    // ES6 Object literal
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
  };

//   Task 1
  const [player1, player2] = game.players;
  console.log(player1, player2);

  //   Task 2
  const [gkTeam1, ...feildPlayersTeam1] = player1;
  console.log('GK - ' + gkTeam1, feildPlayersTeam1);

  const [gkTeam2, ...feildPlayersTeam2] = player2;
  console.log('GK - ' + gkTeam2, feildPlayersTeam2);

  //   Task 3
  const allPlayers = [...player1, ...player2];
  console.log(allPlayers);

//   Task 4
const players1Final = [...player1, 'Thiago', 'Countinbo', 'Perisic'];
console.log(players1Final);

//   Task 5
const {
    odds: {team1, x: draw, team2}
} = game;
console.log(team1, draw, team2);

//   Task 6
const printGoals = function (...players) {
    // console.log(players);
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//   Task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


console.log('-------- Challenge 2 --------');

// 1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1} : ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) 
    average += odd;
    average /=  odds.length;
    console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}

