import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage({ data }) {
  const { name, details, id, discount, price, introduction, ingredients, recipe } = data;

  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span>
              <Location />
              {details[0].Cuisine}
            </span>
            <div className={discount ? styles.priceOffer : styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price} $
            </div>
          </div>
        </div>
        <p className={styles.introduction}>{introduction}</p>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {
              details.map( (item,index) => <li key={index}>
                <span>{Object.keys(item)}: </span> 
                <span> {Object.values(item)}</span>
              </li>)
            }
          </ul>
        </div>
        <div className={styles.details}>
          <h4>Ingredients</h4>
          <ul>
            {
              ingredients.map((item,index) => <li key={index}>{item}</li>)
            }
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          <ul>
            {
              recipe.map((item,index) => <li key={index} className={index % 2 ? styles.odd : styles.even }>
                <span>{index+1}</span>
                <p>{item}</p>
              </li>)
            }
          </ul>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default DetailsPage;