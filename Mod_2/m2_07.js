const sides = prompt('Gimme-Gimme number of sides of your dice')
do {
    dice = Math.floor(Math.random() * sides + 1);
    const outputElement = document.getElementById('output');
    const listItem = document.createElement('li');
    listItem.textContent = `Dice number: ${dice}`;
    outputElement.appendChild(listItem);
} while (dice != sides);