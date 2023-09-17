
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]}°C in ${i + 1} day${i === 0 ? '' : 's'} ...`);
    }
};





console.log('Data 1 Forecast:');
printForecast(data1);

console.log('\nData 2 Forecast:');
printForecast(data2);