// . Create an arrow function 'calcAverage' to calculate the average of 3 scores
var scoreDolphins = [44, 23, 71];
var scoreKoalas = [85, 54, 41];

var calcAverage = (scores) => {
    var sum = 0;
    scores.forEach(element => {
        sum += element;
    });
    return sum / scores.length;
}
// 2. Use the function to calculate the average for both teams
var averageDolphins = calcAverage(scoreDolphins);
var averageKoalas = calcAverage(scoreKoalas);
console.log("Điểm trung bình dolphins team là: "+averageDolphins)

console.log("Điểm turng bình koalas team là: "+averageKoalas)


// //3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};


const averageDolphins = calcAverage(scoreDolphins);
const averageKoalas = calcAverage(scoreKoalas);

checkWinner(averageDolphins, averageKoalas);
//5.inore draw
const checkWinner1 = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
};

// Example usage
const averageDolphins = calcAverage(scoreDolphins);
const averageKoalas = calcAverage(scoreKoalas);

checkWinner1(averageDolphins, averageKoalas);





