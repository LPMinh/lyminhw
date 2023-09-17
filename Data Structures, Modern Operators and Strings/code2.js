// Given data for the game
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

// Task 1: Print each player name and goal number
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// Task 2: Calculate and log the average odd
const { odds } = game;
const averageOdd = (odds.team1 + odds.draw + odds.team2) / 3;
console.log('Average odd:', averageOdd.toFixed(2));

// Task 3: Print the odds in a formatted way
console.log(`Odd of victory ${game.team1}: ${odds.team1}`);
console.log(`Odd of draw: ${odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${odds.team2}`);

// Task 4 (Bonus): Create an object containing player names and goal counts
const scorers = {};
game.scored.forEach((player) => {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
});
console.log('Scorers:', scorers);