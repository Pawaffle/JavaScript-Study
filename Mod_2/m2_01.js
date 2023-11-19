const myArr = []

for (let i = 0; i < 5; i++) {
    let int = parseInt(prompt('Gimme-Gimme your number'))
    myArr.push(int)
}

for (let i = 4; i >= 0; i--) {
    console.log(myArr[i])
}