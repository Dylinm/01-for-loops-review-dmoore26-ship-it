
// CREATE EVENT LISTENERS
// Function to create and display chips
const cardConfigs = [
  { start: 1, end: 15, step: 1 },
  { start: 15, end: 1, step: -1 },
  { start: 1, end: 30, step: 1, filter: 'odd' },
  { start: 30, end: 0, step: -5 },
  { start: -50, end: 50, step: 5 },
  { start: -50, end: 50, step: 2 }
];

function shouldDisplay(num, filter) {
  if (filter === 'odd') return num % 2 !== 0;
  if (filter === 'even') return num % 2 === 0;
  if (filter === 'mul5') return num % 5 === 0;
  return true;
}


// CREATE FUNCTIONS W/ LOOPS