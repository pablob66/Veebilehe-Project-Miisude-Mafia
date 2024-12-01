// Get the modal and the close button
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// Get all the gallery images
const galleryImages = document.querySelectorAll('.piltSid2');

// Loop through all images and add a click event listener
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'flex'; // Show the modal
        modalImg.src = this.src; // Set the modal image to the clicked image
    });
});

// When the user clicks the close button, hide the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
