const name = prompt('Gimme-Gimme your name');

let rand = Math.floor(Math.random() * 4);

switch(rand) {
    case 0:
        rand = 'Gryffindor';
        break;
    case 1:
        rand = 'Slytherin';
        break;
    case 2:
        rand = 'Hufflepuff';
        break;
    case 3:
        rand = 'Ravenclaw';
        break;
}

document.getElementById('output').innerText = `${name}, you are ${rand}.`