const diceContainer = document.querySelector("#dice-container");

const numbers = [1, 2, 3, 4, 5, 6];

const rolledDice = [];

function rollDice() {
  const roll = numbers[Math.floor(Math.random() * numbers.length)];
  rolledDice.push(roll);
  updateContent();
}

function updateContent() {
  while (diceContainer.firstChild) {
    diceContainer.firstChild.remove();
  }

  const stats = {
    ones: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    sum: 0,
  };
  for (let roll of rolledDice) {
    const rollImg = document.createElement("img");
    rollImg.src = `./images/${roll}.png`;
    diceContainer.append(rollImg);
    if (roll === 1) stats.ones++;
    if (roll === 2) stats.twos++;
    if (roll === 3) stats.threes++;
    if (roll === 4) stats.fours++;
    if (roll === 5) stats.fives++;
    if (roll === 6) stats.sixes++;
    stats.sum += roll;
  }

  for (let key in stats) {
    document.querySelector(`#${key}`).textContent = `${key}: ${stats[key]}`;
  }
}
