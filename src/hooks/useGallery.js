import { useEffect, useRef, useState } from 'react';

const useGallery = ({ gallery, counter, hiddenLightbox }) => {
  const [selected, setSelected] = useState(1);
  const productGallery = useRef(null);
  const productThumbnails = useRef(null);
  const total = useRef(0);

  const handleClickThumbnail = (e = null) => {
    if (e) {
      // Get the button data-index value
      const imageNumber = Number(e.target.getAttribute('data-index')) - 1;

      // Update the total value
      total.current = productGallery.current.offsetWidth * imageNumber;

      // Update the counter value
      counter.current = imageNumber;

      // Update the selected thumbnail with the button data-index value clicked
      setSelected(Number(e.target.getAttribute('data-index')));
    } else {
      // Update the total value
      total.current = productGallery.current.offsetWidth * counter.current;

      // Update the selected thumbnail with the current counter
      setSelected(counter.current + 1);
    }

    // Update the productGallery position with the total value
    productGallery.current.style.transform = `translateX(-${total.current}px)`;
  };

  // Function that shows the previous product image of the gallery if it's not the first one
  const handlePrevious = () => {
    if (total.current === 0) return;

    counter.current -= 1;

    total.current -= productGallery.current.offsetWidth;

    productGallery.current.style.transform = `translateX(-${total.current}px)`;

    setSelected(counter.current + 1);
  };

  // Function that shows the next product image of the gallery if it's not the last one
  const handleNext = () => {
    // Get the value of the last productGallery position available
    const finalSlide = (gallery.length - 1) * productGallery.current.offsetWidth;

    if (total.current < finalSlide) {
      counter.current += 1;

      total.current += productGallery.current.offsetWidth;

      productGallery.current.style.transform = `translateX(-${total.current}px)`;

      setSelected(counter.current + 1);
    }
  };

  useEffect(() => {
    // Every time the lightbox is opened or closed the selected photo is updated
    handleClickThumbnail();

    // Update the translateX value of the product gallery div when the window is resizing
    window.addEventListener('resize', () => {
      productGallery.current.style.transform = `translateX(-${productGallery.current.offsetWidth * counter.current}px)`;

      total.current = productGallery.current.offsetWidth * counter.current;
    });
  }, [hiddenLightbox]);

  return {
    handleClickThumbnail, handlePrevious, handleNext, productGallery, productThumbnails, selected,
  };
};

export default useGallery;
