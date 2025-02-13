let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    slides[slideIndex - 1].className += " fade";  // Add fade effect
    dots[slideIndex - 1].className += " active";
}
// Array to hold the slide index for each slideshow
/*let slideIndices = [1, 1]; // Assuming two slideshows

// Initialize the slideshows
showSlides(1, slideIndices[0]);
showSlides(2, slideIndices[1]);

function plusSlides(slideshowNumber, n) {
    slideIndices[slideshowNumber - 1] += n;
    showSlides(slideshowNumber, slideIndices[slideshowNumber - 1]);
}

function currentSlide(slideshowNumber, n) {
    slideIndices[slideshowNumber - 1] = n;
    showSlides(slideshowNumber, slideIndices[slideshowNumber - 1]);
}

function showSlides(slideshowNumber, n) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + slideshowNumber);
    let dots = document.getElementsByClassName("dot" + slideshowNumber);

    if (n > slides.length) { slideIndices[slideshowNumber - 1] = 1; }
    if (n < 1) { slideIndices[slideshowNumber - 1] = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndices[slideshowNumber - 1] - 1].style.display = "block";
    dots[slideIndices[slideshowNumber - 1] - 1].className += " active";
}*/


