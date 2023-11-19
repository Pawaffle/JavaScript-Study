const max = parseInt(prompt('How many will be participants'));
const myList = [];

for (let i = 0; i < max; i++) {
    myList.push(prompt(`Name of participant #${i + 1}`));
}

myList.sort();

for (let i = 0; i < myList.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = myList[i];
    document.getElementById('output').appendChild(listItem);
}