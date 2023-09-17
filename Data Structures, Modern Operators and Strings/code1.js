
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }
};

// Task 1: Create player arrays for each team
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// Task 2: Extract goalkeeper and field players for Bayern Munich (team 1)
const [gk, ...fieldPlayers] = players1;

// Task 3: Create an array containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// Task 4: Create an array for team1's final players with substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5: Extract odds from game object
const { odds: { team1, draw, team2 } } = game;

// Task 6: Write a function to print player names and the total goals
const printGoals = (...players) => {
    console.log(`${players.length} goals were scored by: ${players.join(', ')}`);
};

// Task 7: Print which team is more likely to win based on odds
team1 < team2 && console.log(`${game.team1} is more likely to win`);
team2 < team1 && console.log(`${game.team2} is more likely to win`);

// Test data for task 6
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
