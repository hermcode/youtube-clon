import { data } from './data.js'

const btnOpenCloseMenu = document.querySelector('#btnOpenCloseMenu')
const aside = document.querySelector('#aside')
const main = document.querySelector('#main')
const mainWrapper = document.querySelector('#mainWrapper')
// let intViewportWidth = window.innerWidth;

if(window.innerWidth < 1024) {
    aside.classList.add('desplegar')
}

btnOpenCloseMenu.addEventListener('click', () => {

    // aside.classList.toggle('desplegar')
    // main.classList.toggle('main-full-screen')

    if(aside.classList.contains('desplegar')){
        aside.classList.remove('desplegar')
        main.classList.remove('main-full-screen')
    } else {
        aside.classList.add('desplegar')
        main.classList.add('main-full-screen')
    }
})

window.addEventListener('resize', () => {

    if(window.innerWidth < 1024) {

        if(!aside.classList.contains('desplegar')) {
            aside.classList.add('desplegar')
        } 
    } else {
        aside.classList.remove('desplegar')
        main.classList.remove('main-full-screen')
    }
})

function videoCard() {
    data.forEach( video => {
        const divCard = document.createElement('div')
        divCard.classList.add('card')
        divCard.innerHTML = `
            <img src=${video.imgSrc} alt="">
            <div class="card-info">
                <img src=${video.ppSrc} alt="">
                <div class="card-text-data">
                    <h3>${video.title.length > 60
                        ? video.title.substr(0,60) + '...'
                        : video.title
                    }</h3>
                    <p>${video.channelName}</p>
                    <span>${video.views} vistas</span>
                </div>
            </div>
        `
        mainWrapper.appendChild(divCard)
    })
}

videoCard()
videoCard()
videoCard()

