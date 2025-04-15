const gallery = document.getElementsByClassName('gallery')[0];
const lightbox = document.getElementsByClassName('lightbox')[0];
const galleryItems = document.querySelectorAll('img.gallery-item');
const lightboxImage = document.getElementById('lightbox-image')
const lightboxItems = document.querySelectorAll('.lightbox *');
const closeButton = document.getElementById('close');

galleryItems.forEach( (img)=> {
  img.addEventListener('click', (e)=> {
    if(e.target.className === 'gallery-item') {
      lightbox.style.display = 'flex';
      lightboxImage.src = e.target.src.replace('-thumbnail', '');
    }
    console.log('gallery clicked!')
  });
});

  lightbox.addEventListener('click', ()=> {
  lightbox.style.display = 'none';
  console.log('lightbox clicked')
  });

  lightboxItems.forEach( (element)=> {
    element.addEventListener('click', ()=> {
      lightbox.style.display = 'none';
    })
  })
