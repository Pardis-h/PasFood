import Link from "next/link";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2>PasFood</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          laudantium placeat repellat sint maiores id tenetur voluptate veniam
          aliquid, assumenda quaerat tempore odit eaque saepe rerum fuga amet
          provident molestias.
        </span>
        <Link href='/menu'>See All</Link>
      </div>
      <div className={styles.rightSide}>
        <img src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
}

export default Hero;
