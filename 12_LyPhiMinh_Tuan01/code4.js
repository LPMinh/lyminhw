var bill = 150;
var tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill;
console.log("Tip is", tip)

console.log("The bill was %s, the tip was %s, and the total value %f", bill, tip, bill + tip)