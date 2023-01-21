'use strict';

const IMAGES = [
    { id: 'image1', src: 'italy.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image2', src: 'germany.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image3', src: 'irland.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image4', src: 'map.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image5', src: 'italy.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image6', src: 'germany.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image7', src: 'irland.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image8', src: 'map.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image9', src: 'italy.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image10', src: 'germany.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image11', src: 'irland.jpg', description:'This is a very good description.', link:'#' },
    { id: 'image12', src: 'map.jpg', description:'This is a very good description.', link:'#' },
]

const caroussel = document.querySelector('.galleryContainer_carousell')
const carousselButtonLeft = document.querySelector('.carousselControl_left')
const carousselButtonRight = document.querySelector('.carousselControl_right')
let translation = 0;

IMAGES.forEach(image=>{
    caroussel.innerHTML += `
    <div class="galleryContainer_image-container" id="${image.id}">
    <div class="galleryContainer_image" style="background-image: url(./assets/${image.src});"></div>
    <div class="galleryContainer_description">
        <p>${image.description}</p>
        <div class="buttonContainer">
            <a href='${image.link}'>View</a>
        </div>
    </div>
    </div>
    `
})
const cards = document.querySelectorAll('.galleryContainer_image-container')

carousselButtonLeft.addEventListener('click', ()=>{
    translation < 0 && translateCaroussel('left')
})
carousselButtonRight.addEventListener('click', ()=>{
    (translation <= 0 && translation>(((IMAGES.length-1)*250)*-1)) && translateCaroussel('right')
})

const translateCaroussel = (direction) => {
    translation = direction === 'left' ? translation+250 : translation-250
    let bounceDirection = direction === 'left' ? 20 : -20;
    caroussel.style.transform = `translateX(${translation+bounceDirection}px)`
    setTimeout(()=>caroussel.style.transform = `translateX(${translation}px)`,1000)
}


//show detail of card
cards.forEach(card=>{
    card.addEventListener('click', ()=>{
        cards.forEach(card2=>{card.id !== card2.id && card2.classList.remove('showDetail')}) //close all other cards
        card.classList.contains('showDetail') 
        ? card.classList.remove('showDetail')
        : card.classList.add('showDetail')
    })
})

