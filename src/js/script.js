
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

const cards = document.querySelectorAll('#cards .card');
cards.forEach((card, index) => {
  const config = cardConfigs[index];
  const resultRow = card.querySelector('.result-row');
  const runBtn = card.querySelector('.btn-primary');
  const resetBtn = card.querySelector('.btn-outline-secondary');

  runBtn.addEventListener('click', function() {
    resultRow.classList.remove('hint');
    resultRow.innerHTML = '';

    if (config.step > 0) {
      for (let i = config.start; i <= config.end; i += config.step) {
        if (shouldDisplay(i, config.filter)) {
          const chip = document.createElement('span');
          chip.className = 'chip show';
          chip.textContent = i;
          resultRow.appendChild(chip);
        }
      }
    } else {
      for (let i = config.start; i >= config.end; i += config.step) {
        if (shouldDisplay(i, config.filter)) {
          const chip = document.createElement('span');
          chip.className = 'chip show';
          chip.textContent = i;
          resultRow.appendChild(chip);
        }
      }
    }
  });

  resetBtn.addEventListener('click', function() {
    resultRow.innerHTML = '';
    resultRow.classList.add('hint');
  });
});

// CREATE FUNCTIONS W/ LOOPS