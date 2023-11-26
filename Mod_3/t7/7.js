'use strict';
const hover = document.getElementById('trigger')
hover.addEventListener('mouseover', function (){
    document.querySelector('img').src = "img/picB.jpg"
})
hover.addEventListener('mouseout', function (){
    document.querySelector('img').src = "img/picA.jpg"
})