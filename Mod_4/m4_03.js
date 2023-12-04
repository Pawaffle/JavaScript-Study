'use strict'

const form = document.querySelector('form')

async function fetchSomething(input) {
    const data = await fetch(`https://api.tvmaze.com/search/shows/?q=${input}`)
    const jsonData = await data.json()
    return jsonData
}

function showData(objectData) {
    let data = objectData.show
    const header2 = document.createElement('h2')
    header2.innerText = data.name

    const seriesUrl = document.createElement('a')
    seriesUrl.href = data.url
    seriesUrl.target = "_blank"
    seriesUrl.innerText = `Link to ${data.name} page on TVMaze`

    const poster = document.createElement('img')
    poster.src = data.image?.medium
    poster.alt = data.name

    const summary = document.createElement('div')
    summary.innerHTML = data.summary

    const article = document.createElement('article')
    article.classList.add('article')
    article.append(header2, poster, seriesUrl, summary)
    return article
}

form.addEventListener('submit',
    async function(event) {
        event.preventDefault()

        const search = document.querySelector('#query').value
        const article = document.querySelector('article')
        article.innerHTML = ''
        const objectShow = await fetchSomething(search)

        console.log( await fetchSomething(search))

        console.log('constructing the page... ' + search)
        for (let i = 0; i < objectShow.length; i++) {
            let newArticle = showData(objectShow[i])
            article.append(newArticle)
        }
        console.log('construction finished')
    })
