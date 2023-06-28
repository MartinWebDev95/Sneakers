import { useEffect, useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import sneaker from './services/sneakerData';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(sneaker);
  }, []);

  return (
    <>
      <Header />

      <main className={styles.container}>
        <div className={styles.containerImages}>
          <div className={styles.containerSlider}>
            <button type="button" className={styles.buttonPrev}>
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
              </svg>
            </button>

            <div className={styles.containerImg}>
              {data?.gallery?.map((item) => (
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
            {data?.thumbnails?.map((item) => (
              <img
                key={item.id}
                src={item.sneakerThumbnail}
                alt={item.altText}
                data-index={item.id}
              />
            ))}
          </div>
        </div>

        <div className={styles.containerInfo}>
          <h1>Sneaker Information</h1>
        </div>
      </main>
    </>
  );
}

export default App;
