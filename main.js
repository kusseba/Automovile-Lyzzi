const images = [
    'img/background1.jpg',
    'img/background2.jpg',
    'img/background3.jpg'
] 

let index = 0;
const max = images.length;

const containerElement = document.querySelector('.container');
const preSlideButton = document.querySelector('.preSlide');
const nextSlideButton = document.querySelector('.nextSlide')

preSlideButton.addEventListener("click", function() {
    index--;
    setImagesIndex()
    changeBackgroundImage(images[index], containerElement)
});

nextSlideButton.addEventListener("click", function() {
    index++;
    setImagesIndex()
    changeBackgroundImage(images[index], containerElement)
});


function setImagesIndex() {
    if(index < 0) index = max - 1;
    if(index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${changeBackgroundImage})`;
}