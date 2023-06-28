import styles from './Header.module.css';
import Profile from '../Profile';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Navigation />

        <Profile />
      </div>
    </header>
  );
}

export default Header;
