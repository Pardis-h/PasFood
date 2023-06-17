import styles from './Card.module.css'

function Card(props) {
    const {name, price, discount, details , id} = props;
  return (
    <div className={styles.card}>
        <h3>{name}</h3>
    </div>
  )
}

export default Card