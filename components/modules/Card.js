import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { name, price, discount, details, id } = props;
  return (
    <div className={styles.card}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      {discount ? <span className={styles.discount}>{discount}%</span> : null}
      <div className={styles.cardBody}>
        <div className={styles.details}>
          <h3>{name}</h3>
          <span>
            <Location />
            {details[0].Cuisine}
          </span>
        </div>
        <div className={discount ? styles.priceOffer : styles.price}>
          <Dollar />
          {discount ? (price * (100 - discount)) / 100 : price} $
        </div>
        <Link href={`/menu/${id}`}>
          <button>See Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
