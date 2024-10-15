const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
    'image4.jpeg',
    'image5.jpeg',
    'image6.jpeg',
    'image7.jpeg',
    'image8.jpeg',
    'image9.jpeg',
    'image10.jpeg',
    'image11.jpeg',
    'image12.jpeg',
    'image13.jpeg',
    'image14.jpeg',
    'image15.jpeg',
    'image16.jpeg',
    'image17.jpeg',
    'image18.jpeg',
    'image19.jpeg',
    'image20.jpeg',
    'image21.jpeg',
    'image22.jpeg',
    'image23.jpeg',
    'image24.jpeg',
    'image25.jpeg',
    'image26.jpeg',
    'image27.jpeg',
    'image28.jpeg',
    'image29.jpeg',
    'image30.jpeg',

  ];
  
  let currentImageIndex = 0;
  
  const galleryImage = document.getElementById('galleryImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  function updateImage() {
    galleryImage.src = images[currentImageIndex];
  }
  
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });
  