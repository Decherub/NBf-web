const images = [
    "../../assets/Dr Nkem.png",
    "../../assets/w12.png",
    "../../assets/igwe13.png",
    // Add more image paths as needed
];

let currentIndex = 0;

function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    currentIndex = index;
    lightboxImg.src = images[currentIndex]; // Set the initial image
    console.log("Open lightbox with image:", lightboxImg.src); // Debug log
    lightbox.style.display = "flex"; // Display the lightbox
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
    currentIndex += direction;

    // Wrap around if index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const lightboxImg = document.getElementById("lightboxImg");
    lightboxImg.src = images[currentIndex]; // Update the image source
    console.log("Changed to image:", lightboxImg.src); // Debug log
}
