document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxDescription = document.getElementById("lightbox-description");
    const lightboxClose = document.getElementById("lightbox-close");

    // Add click event listeners to all gallery items
    document.querySelectorAll(".gallery-item").forEach(item => {
        item.addEventListener("click", function () {
            lightboxImage.src = this.src; // Set lightbox image to clicked image
            lightboxDescription.textContent = this.getAttribute("data-description"); // Set the description
            lightbox.style.display = "flex"; // Show the lightbox
        });
    });

    // Close the lightbox when clicking the close button
    lightboxClose.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightboxImage.src = ""; // Clear the image
        lightboxDescription.textContent = ""; // Clear the description
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target === lightboxImage) {
            lightbox.style.display = "none";
            lightboxImage.src = ""; // Clear the image
            lightboxDescription.textContent = ""; // Clear the description
        }
    });
});