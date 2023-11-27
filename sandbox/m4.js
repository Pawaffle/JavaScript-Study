
function positionSuccess(position) {
    console.log(position)
}

function positionError(error) {
    console.log(error)
    console.log(error.message)
}

// Starts the geolocation search
navigator.geolocation.getCurrentPosition(
    positionSuccess,
    positionError,
    {enableHighAccuracy: true});

console.log('print after geolocation call')

// Avoimet rajapinnat - Fetch ja AJAX

/* old school
const joke = fetch('https://api.chucknorris.io/jokes/random').then(
    function (result) {
        console.log(result)
    }).catch(
        function (error) {
            console.log(error)
        }
) */

async function fetchJoke() {
    let jokeContent
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const joke = await response.json()
        console.log('joke', joke)
        jokeContent = joke.value
    } catch (error) {
        console.log('fetch error', error)
        const joke = {};
        jokeContent = 'No joke today'
    }
    document.querySelector('p').textContent = jokeContent
}

fetchJoke()