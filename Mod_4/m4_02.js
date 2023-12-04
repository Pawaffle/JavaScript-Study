'use strict'

const form = document.querySelector('form')

async function fetchSomething(input) {
    const data = await fetch(`https://api.tvmaze.com/search/shows/?q=${input}`)
    const jsonData = await data.json()
    return jsonData
}

form.addEventListener('submit',
    async function(event) {
        event.preventDefault()
        const search = document.querySelector('#query').value
        console.log( await fetchSomething(search))
            })