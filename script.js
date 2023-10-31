const lazyImages = document.querySelectorAll('img[data-src]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, {once: true});
})

function onImageLoaded(evt){
    console.log('pictures download');
    evt.target.classList.add('appear')
}

if ('loading' in HTMLImageElement.prototype) {
    console.log('Brawser support lazy loading')
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
} else {
    console.log('Brawser NOT support lazy loading');

    const script = document.createElement('script');
     
    script.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
      script.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
         script.crossOrigin="anonymous"
    document.body.appendChild(script)
}

