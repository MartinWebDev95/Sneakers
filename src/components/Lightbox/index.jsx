import useGallery from '../../hooks/useGallery';
import styles from './Lightbox.module.css';

function Lightbox({
  gallery, thumbnails, counter, hiddenLightbox, setHiddenLightbox,
}) {
  const {
    handleClickThumbnail, handleNext, handlePrevious, productGallery, productThumbnails, selected,
  } = useGallery({ gallery, counter, hiddenLightbox });

  const handleHiddenLightbox = () => {
    setHiddenLightbox(!hiddenLightbox);

    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.lightbox} aria-hidden={hiddenLightbox}>
      <div className={styles.containerImages}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleHiddenLightbox}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />
          </svg>
        </button>

        <div className={styles.containerSlider}>
          <button type="button" className={styles.buttonPrev} onClick={handlePrevious}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
            </svg>
          </button>

          <div className={styles.gallery}>
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
              data-index={item.id}
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
    </div>
  );
}

export default Lightbox;
