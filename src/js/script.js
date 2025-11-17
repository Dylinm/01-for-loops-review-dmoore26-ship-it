
// CREATE EVENT LISTENERS
// Function to create and display chips
function createChips(numbers, container) {
    container.innerHTML = '';  // Clear the previous results
    numbers.forEach((num, index) => {
        const chip = document.createElement('div');
        chip.classList.add('chip');
        chip.textContent = num;

        // Add a delay to animate the chips one by one
        setTimeout(() => {
            chip.classList.add('show');
        }, index * 100);  // Adjust timing for each chip

        container.appendChild(chip);
    });
}

// Pre-Built Loop 1: Count Up 1 → 15 (Step +1)
function countUp1To15() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = 1; i <= 15; i++) {
        numbers.push(i);
    }
    createChips(numbers, container);
}

// Pre-Built Loop 2: Count Down 15 → 1 (Step -1)
function countDown15To1() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = 15; i >= 1; i--) {
        numbers.push(i);
    }
    createChips(numbers, container);
}

// Pre-Built Loop 3: Odd Numbers 1 → 30
function oddNumbersUpTo30() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = 1; i <= 30; i++) {
        if (i % 2 !== 0) {
            numbers.push(i);
        }
    }
    createChips(numbers, container);
}

// Pre-Built Loop 4: Multiples of 5 (30 → 0)
function multiplesOf5() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = 30; i >= 0; i -= 5) {
        numbers.push(i);
    }
    createChips(numbers, container);
}

// Pre-Built Loop 5: Full Range -50 → 50 (Step +5)
function fullRangeMinus50To50() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = -50; i <= 50; i += 5) {
        numbers.push(i);
    }
    createChips(numbers, container);
}

// Pre-Built Loop 6: Multiples of 2 (-50 → 50)
function multiplesOf2() {
    const container = document.querySelector('.result-row.hint');
    const numbers = [];
    for (let i = -50; i <= 50; i += 2) {
        numbers.push(i);
    }
    createChips(numbers, container);
}

// Playground: Custom Loop based on user input
function customLoop() {
    const start = parseInt(document.getElementById('pg-start').value);
    const end = parseInt(document.getElementById('pg-end').value);
    const step = parseInt(document.getElementById('pg-step').value);
    const filter = document.getElementById('pg-filter').value;

    const container = document.getElementById('pg-row');
    const numbers = [];

    // Generate numbers based on the start, end, and step
    for (let i = start; i <= end; i += step) {
        // Apply filter logic (if any)
        if (filter === 'odd' && i % 2 !== 0) {
            numbers.push(i);
        } else if (filter === 'even' && i % 2 === 0) {
            numbers.push(i);
        } else if (filter === 'mul5' && i % 5 === 0) {
            numbers.push(i);
        } else if (filter === 'none') {
            numbers.push(i);
        }
    }

    createChips(numbers, container);
}

// Event Listeners for the predefined loop buttons (Run)
document.querySelectorAll('.btn-primary').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        switch (index) {
            case 0: countUp1To15(); break;
            case 1: countDown15To1(); break;
            case 2: oddNumbersUpTo30(); break;
            case 3: multiplesOf5(); break;
            case 4: fullRangeMinus50To50(); break;
            case 5: multiplesOf2(); break;
        }
    });
});

// Event Listener for the Playground Run button
document.getElementById('pg-run').addEventListener('click', customLoop);

// Reset functionality for each section
document.querySelectorAll('.btn-outline-secondary').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = document.querySelectorAll('.result-row.hint')[index];
        container.innerHTML = ''; // Clear the results for that card
    });
});

// Reset the Playground
document.getElementById('pg-reset').addEventListener('click', () => {
    document.getElementById('pg-row').innerHTML = ''; // Clear the Playground results
});


// CREATE FUNCTIONS W/ LOOPS