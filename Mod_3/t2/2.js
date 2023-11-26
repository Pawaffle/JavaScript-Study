let targetElement = document.querySelector('#target')
counter = ['First', 'Second', 'Third']

for (let i = 0; i < counter.length; i++) {
    const newItem = document.createElement('li');
    newItem.textContent = `${counter[i]} item`;
    targetElement.appendChild(newItem);
}
targetElement.childNodes[1].className = 'my-item'

console.log(targetElement.outerHTML)