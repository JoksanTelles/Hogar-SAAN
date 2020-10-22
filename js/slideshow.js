var i = 0; // Start point
var imagenes = [];
var tiempo = 2000;

// Image list
imagenes[0] = 'img/image-slider-01.jpg';
imagenes[1] = 'img/image-slider-02.jpg';
imagenes[2] = 'img/image-slider-03.jpg';
imagenes[3] = 'img/image-slider-04.jpg';
imagenes[4] = 'img/image-slider-05.jpg';
imagenes[5] = 'img/image-slider-06.jpg';

// Change image
function slider(){
    document.slideshow.src = imagenes[i];

    if(i < imagenes.length - 1){
        i++;
    } else {
        i = 0;
    }
    
    setTimeout("slider()", tiempo);
}
window.onload = slider;