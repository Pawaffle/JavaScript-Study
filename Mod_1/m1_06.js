const bl = confirm('Should I calculate the square root?');
let output

if (bl) {
    const num = parseInt(prompt('Gimme-Gimme your number'));
    if (num < 0 || isNaN(num)) {
        output = 'The square root of a negative number is not defined.';
    } else {
        output = `The square root of ${num} is ${Math.sqrt(num)}`;
    }
}  else {
    output = 'The square root is not calculated.';
}

document.getElementById('output').innerText = output;