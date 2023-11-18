let yr = parseInt(prompt('Gimme-Gimme your year'));

if (yr % 100 === 0 && yr % 400 === 0 || yr % 4 === 0 ){
    document.getElementById('output').innerText = `${yr} is a leap year.`;
} else {
    document.getElementById('output').innerText = `${yr} is not a leap year.`;
}