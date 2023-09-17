var scoreDolphins = [96, 108, 86]
var scoreKoalas = [88, 91, 110]

var avgDolphins = scoreDolphins.reduce((a, b) => a + b, 0) / scoreDolphins.length;
var avgKoalas = scoreKoalas.reduce((a, b) => a + b, 0) / scoreKoalas.length;

console.log("score Dolphins is %s", avgDolphins);
console.log("score Koalas is %s", avgKoalas);
if (avgDolphins > avgKoalas) {
    console.log("Dolphins team is the winner")
} else if (avgDolphins < avgKoalas) {
    console.log("Koalas team is the winner")
} else {
    console.log("both draw!!")
}

console.log("Bonus 1:")

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Dolphins team is the winner")
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Koalas team is the winner")
} else if (avgDolphins == avgKoalas) {
    console.log("both draw!!")
} else {
    (avgDolphins > avgKoalas) ? console.log("Dolphins score not higher than 100"): console.log("Koalas score not higher than 100")
}



if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("Dolphins team is the winner")
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("Koalas team is the winner")
} else if (avgDolphins == avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("both draw!!")
} else {
    (avgDolphins > avgKoalas) ? console.log("Dolphins score not higher than 100"): console.log("Koalas score not higher than 100")
}