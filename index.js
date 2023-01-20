'use strict';
const IMAGES = ['italy.jpg', 'germany.jpg', 'irland.jpg', 'map.jpg','italy.jpg', 'germany.jpg', 'irland.jpg', 'map.jpg','italy.jpg', 'germany.jpg', 'irland.jpg', 'map.jpg']

const caroussel = document.querySelector('.galleryContainer_carousell')
const carousselButtonLeft = document.querySelector('.carousselControl_left')
const carousselButtonRight = document.querySelector('.carousselControl_right')
let translation = 0;

IMAGES.forEach(image=>{
    caroussel.innerHTML += `
    <div class="galleryContainer_image-container">
        <div class="galleryContainer_image" style="background-image: url(./assets/${image});"></div>
    </div>
    `
})

carousselButtonLeft.addEventListener('click', ()=>{
    translation < 0 && translateCaroussel('left')
})
carousselButtonRight.addEventListener('click', ()=>{
    (translation <= 0 && translation>(((IMAGES.length-1)*250)*-1)) && translateCaroussel('right')
})

const translateCaroussel = (direction) => {
    translation = direction === 'left' ? translation+250 : translation-250
    caroussel.style.transform = `translateX(${translation}px)`
}
