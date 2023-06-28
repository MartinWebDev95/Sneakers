import { useEffect, useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';
import sneaker from './services/sneakerData';
import Gallery from './components/Gallery';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(sneaker);
  }, []);

  return (
    <>
      <Header />

      <main className={styles.container}>
        <Gallery gallery={data.gallery} thumbnails={data.thumbnails} />

        <div className={styles.containerInfo}>
          <h1>Sneaker Information</h1>
        </div>
      </main>
    </>
  );
}

export default App;
