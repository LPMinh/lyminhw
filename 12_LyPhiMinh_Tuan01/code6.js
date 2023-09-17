// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
const testBill = 100;
const testTip = calcTip(testBill);
console.log(`For a bill of $${testBill}, the tip is $${testTip}`);
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
const tips = bills.map(calcTip);
console.log('Tips for each bill:', tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const totals = bills.map((bill, index) => bill + tips[index]);
console.log('Total for each bill:', totals);