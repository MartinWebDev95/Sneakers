import { useRef, useState } from 'react';
import styles from './Gallery.module.css';

function Gallery({ gallery, thumbnails }) {
  const productGallery = useRef(null);
  const productThumbnails = useRef(null);
  const [selected, setSelected] = useState(1);

  const handleClickThumbnail = (e) => {
    const imageNumber = Number(e.target.getAttribute('data-index')) - 1;

    productGallery.current.style.transform = `translateX(-${productGallery.current.offsetWidth * imageNumber}px)`;

    setSelected(Number(e.target.getAttribute('data-index')));
  };

  return (
    <div className={styles.containerImages}>
      <div className={styles.containerSlider}>
        <button type="button" className={styles.buttonPrev}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>

        <div className={styles.containerImg} ref={productGallery}>
          {gallery?.map((item) => (
            <img
              key={item.id}
              src={item.sneakerImg}
              alt={item.altText}
              data-index={item.id}
            />
          ))}
        </div>

        <button type="button" className={styles.buttonNext}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className={styles.containerThumbnails} ref={productThumbnails}>
        {thumbnails?.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={handleClickThumbnail}
            data-selected={selected === item.id}
          >
            <img
              src={item.sneakerThumbnail}
              alt={item.altText}
              data-index={item.id}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
