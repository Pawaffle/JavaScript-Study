// Probability to get sum 7 with 2 dice is 15.64%

const qty = parseInt(prompt('Gimme-Gimme your number'));
let sum = parseInt(prompt('Gimme-Gimme your sum'));
let prob = 0
const loop = 10000

for(let x = 0; x < loop; x++) {
    let loopSum = 0;
    for (let i = 0; i < qty; i++) {
        rand = Math.floor(Math.random() * 6 + 1);
        loopSum += rand;
    }
    if (loopSum == sum) {
        prob++
    }
}

probProcent = prob / loop * 100

output = `Probability to get sum ${sum} with ${qty} dice is ${probProcent}%`
document.getElementById('output').innerText = output;