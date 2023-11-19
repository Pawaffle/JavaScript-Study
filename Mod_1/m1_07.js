const qty = parseInt(prompt('Gimme-Gimme your number'));
let sum = 0;

for (let i = 0; i < qty; i++) {
    rand = Math.floor(Math.random() * 6 + 1);
    sum += rand;
    console.log(rand);
}
document.getElementById('output').innerText = sum;