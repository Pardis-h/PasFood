import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../modules/Card";
import styles from "./CategoriesPage.module.css";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() =>{
    const { difficulty , time} = router.query;
    if( query.difficulty !== difficulty || query.time !== time){
      setQuery({difficulty , time})
    }
  },[])

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({ pathname: "/categories", query });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div >
        <div className={styles.select}>
          <select
            name="difficulty"
            value={query.difficulty}
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select name="time" value={query.time} onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="More">More than 30 minutes</option>
            <option value="Less">Less than 30 minutes</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={data.length ? styles.cardWrapper : styles.subContainer}>
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : (
            data.map((food) => <Card key={food.id} {...food} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
