function imgSlider(clickedImage,color) {
    var newSrc = clickedImage.src;
    var mainImage = document.querySelector('.pepsi');
    mainImage.src = newSrc;

// Change the BG Color of the section

const sec = document.querySelector('.sec');
sec.style.background = color;

}