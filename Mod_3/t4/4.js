'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.querySelector('#target')
for (let i=0; i < students.length; i++) {
  let newElement = document.createElement('option')
  newElement.value = students[i].id
  newElement.textContent = students[i].name
  targetElement.appendChild(newElement)
}