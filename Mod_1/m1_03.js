const int1 = parseInt(prompt('Gimme-Gimme first number'));
const int2 = parseInt(prompt('Gimme-Gimme second number'));
const int3 = parseInt(prompt('Gimme-Gimme third number'));

const sum = int1 + int2 + int3
const product = int1 * int2 * int3
const average = (int1 + int2 + int3) / 3

document.getElementById('sum').innerText = `Here is your sum: ${sum}!`
document.getElementById('product').innerText = `Here is your product: ${product}!`
document.getElementById('average').innerText = `Here is your average: ${average}!`