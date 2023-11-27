async function getSomeMath(num) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/multiply/${num}`)
        const json = await response.json()
        console.log('result', json.result)
        return json.result
    } catch (error) {
        console.error('fail', error)
    }
}

async function doMathOutput(){
    // const number = prompt('Gimme some number')
    // alternative
    const number = document.querySelector('input').value

    const output = await getSomeMath(number)
    document.querySelector('p').textContent = `result is ${output}`
}

document.querySelector('button').addEventListener('click', doMathOutput)