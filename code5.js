var scoreDolphins = [44, 23, 71]
var scoreKoalas = [85, 54, 41]
var calcAverage = (score) => {
    var sum = 0;
    score.array.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log(calcAverage)