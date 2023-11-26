/*
function arrayTest(number) {
    number.push(9);
    return number;
}

const numbers = [1,2,3];
let nums = [];
nums = nums.concat(numbers)
const nums2 = [...nums] // ...[1,2,3] => 1 2 3
console.log('funktion paluarvo', arrayTest(numbers));
console.log('alkuperainen functio', numbers);
console.log('concat', nums)
console.log('[...nums]', nums2)

// window.alert('alarm') = alert('alarm')

// DOM - document object model
console.log(document)

// confirm returns boolean value
if (confirm('Oletko varma?')) {
    console.log('painettu OK')
} else {
    console.log('painettu CANCEL')
}

const userInput = prompt('print something')
console.log('input was', userInput)                                              */

// querySelector - valitse vain ensimäisen
const targetElement = document.querySelectorAll('h1')
console.log(targetElement)

const myParagraph = document.querySelector('p')

function clickHandler() {
    console.log('some text clicked')
}

// here is nameless function
myParagraph.addEventListener('contextmenu', function(event){
    console.log('context menu', event)
    event.preventDefault()
})

document.addEventListener('keyup', function(){
    const somethingNew = document.querySelector('body')
    const newElement = document.createElement('p')
    newElement.textContent = 'Up!'
    somethingNew.append(newElement)
})