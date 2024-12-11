// pagination.js

let currentPage = 1; // Start from page 1
const imagesPerPage = 8; // Number of images per page

// Function to load gallery images for a specific page
async function loadGalleryImages(page) {
  const galleryImages = await getGalleryImages(page, imagesPerPage);
  return galleryImages;
}

// Function to update the page content (images)
async function updatePageContent() {
  const galleryImages = await loadGalleryImages(currentPage);
  const galleryContainer = document.querySelector('.tm-gallery');
  
  galleryContainer.innerHTML = ''; // Clear the existing content

  if (galleryImages.length > 0) {
    galleryImages.forEach(image => {
      const imageElement = document.createElement('div');
      imageElement.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'mb-5');
      imageElement.innerHTML = `
        <figure class="effect-ming tm-video-item">
          <img src="https://${image.fields.gambar.fields.file.url}" alt="Gambar" />
          <figcaption class="d-flex align-items-center justify-content-center">
            <h2>${image.fields.judulGambar}</h2>
            <a href="photo-detail.html">View more</a>
          </figcaption>
        </figure>
        <div class="d-flex justify-content-between tm-text-gray">
          <span class="tm-text-gray-light">18 Oct 2020</span>
          <span>9,906 views</span>
        </div>
      `;
      galleryContainer.appendChild(imageElement);
    });
  } else {
    galleryContainer.innerHTML = '<p>No gallery images found.</p>';
  }

  // Update page number display
  const pageDisplay = document.querySelector('.tm-input-paging');
  pageDisplay.value = currentPage;

  // Handle the enabling/disabling of buttons
  handlePaginationButtons();
}

// Function to handle the "Previous" and "Next" buttons
function handlePaginationButtons() {
  const prevButton = document.querySelector('.tm-btn-prev');
  const nextButton = document.querySelector('.tm-btn-next');

  // Disable "Previous" if we're on the first page
  prevButton.classList.toggle('disabled', currentPage === 1);

  // Disable "Next" if we're on the last page (assumed here we have 200 pages, adjust as necessary)
  nextButton.classList.toggle('disabled', currentPage === 200);
}

// Initialize the page content when the page is loaded
window.onload = async function () {
  await updatePageContent();
};

// Handle "Next" page
document.querySelector('.tm-btn-next').addEventListener('click', function () {
  if (currentPage < 200) {
    currentPage++;
    updatePageContent();
  }
});

// Handle "Previous" page
document.querySelector('.tm-btn-prev').addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    updatePageContent();
  }
});
