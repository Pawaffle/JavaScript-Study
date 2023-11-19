let dice;
do {
    dice = Math.floor(Math.random() * 6 + 1);
    const outputElement = document.getElementById('output');
    const listItem = document.createElement('li');
    listItem.textContent = `Dice number: ${dice}`;
    outputElement.appendChild(listItem);
} while (dice != 6);