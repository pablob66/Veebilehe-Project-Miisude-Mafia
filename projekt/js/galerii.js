//Autor: Mirelle Malle Soodla

// võta modal ja sulgemise nupp X
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close-btn');

// Võta kõik galerii pildid
const galleryImages = document.querySelectorAll('.piltSid2');

// Lappa läbi kõik pildid ja lisa klikkimise koht
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'flex'; // näita modalit
        modalImg.src = this.src; // pane modali pilt klikkamise pildiks
    });
});

// Kui kasutaja vajutab X nuppu galeriipildil, siis peida modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Kui kasutaja vajutab mujale kui modal, siis sulge modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
