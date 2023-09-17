const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '⚽ GOAL'],
    [76, '⚽ GOAL'],
    [80, '🔁 Substitution']
]);

// Task 1
const events = [];
for (const event of gameEvents.values()) {
    if (!events.includes(event)) {
        events.push(event);
    }
}
console.log('Unique game events:', events);

// Task 2
gameEvents.delete(64);
console.log('Game events after removing minute 64:', gameEvents);

// Task 3
const totalMinutes = 90;
const eventCount = gameEvents.size;
const averageEventInterval = totalMinutes / eventCount;
console.log(`An event happened, on average, every ${averageEventInterval.toFixed(1)} minutes`);

// Task 4
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}
