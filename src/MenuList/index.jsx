import styles from './MenuList.module.css';

function MenuList({ hiddenMenu, setHiddenMenu }) {
  return (
    <nav className={styles.navigation} aria-hidden={hiddenMenu}>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => setHiddenMenu(!hiddenMenu)}
      >
        <img src="/public/images/icon-close.svg" alt="Close menu" />
      </button>

      <ul className={styles.menuList}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default MenuList;
