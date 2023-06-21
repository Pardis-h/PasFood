import Link  from "next/link";
import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">PasFood</Link>
        <nav className={styles.nav}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </nav>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/Pardis-h/" target="_blank" rel="noreferrer">Pardis Haghdoust</a>
        <span> - Next.js Course | PasFood Project &copy; </span>
      </footer>
    </>
  );
}

export default Layout;
