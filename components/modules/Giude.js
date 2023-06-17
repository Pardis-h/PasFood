import Link from 'next/link'
import styles from './Giude.module.css'

function Giude() {
  return (
    <div className={styles.container}>
      <Link href='/menu'>Menu</Link>
      <Link href='/categories'>Categories</Link>
      <Link href='/'>Discount</Link>
    </div>
  )
}

export default Giude