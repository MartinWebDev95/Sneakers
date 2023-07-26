import { useRef, useState } from 'react';
import styles from './Gallery.module.css';
import useGallery from '../../hooks/useGallery';
import Lightbox from '../Lightbox';

function Gallery({ gallery, thumbnails }) {
  const [hiddenLightbox, setHiddenLightbox] = useState(true);
  const counter = useRef(0);

  const {
    handleClickThumbnail, handleNext, handlePrevious, productGallery, productThumbnails, selected,
  } = useGallery({ gallery, counter, hiddenLightbox });

  const handleHiddenLightbox = () => {
    // The lightbox is available only in desktop mode
    if (window.innerWidth >= 800) {
      setHiddenLightbox(!hiddenLightbox);

      window.scrollTo(0, 0);

      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <div className={styles.containerImages}>
        <div className={styles.containerSlider}>
          <button type="button" className={styles.buttonPrev} onClick={handlePrevious}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
          </button>

          <div className={styles.containerImg} ref={productGallery}>
            {gallery?.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={handleHiddenLightbox}
              >
                <img
                  key={item.id}
                  src={item.sneakerImg}
                  alt={item.altText}
                  data-index={item.id}
                />
              </button>
            ))}
          </div>

          <button type="button" className={styles.buttonNext} onClick={handleNext}>
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

      <Lightbox
        gallery={gallery}
        thumbnails={thumbnails}
        counter={counter}
        hiddenLightbox={hiddenLightbox}
        setHiddenLightbox={setHiddenLightbox}
      />
    </>
  );
}

export default Gallery;
