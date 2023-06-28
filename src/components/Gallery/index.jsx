import styles from './Gallery.module.css';

function Gallery({ gallery, thumbnails }) {
  return (
    <div className={styles.containerImages}>
      <div className={styles.containerSlider}>
        <button type="button" className={styles.buttonPrev}>
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>

        <div className={styles.containerImg}>
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

      <div className={styles.containerThumbnails}>
        {thumbnails?.map((item) => (
          <img
            key={item.id}
            src={item.sneakerThumbnail}
            alt={item.altText}
            data-index={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
