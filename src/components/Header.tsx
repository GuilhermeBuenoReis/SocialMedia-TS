import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite-logo.svg'

function Header() {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo tipo ignite" />
    </header>
  );
};

export { Header };