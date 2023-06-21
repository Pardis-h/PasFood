import styles from "./CategoriesPage.module.css";
import { useState } from "react";

function CategoriesPage() {
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div>
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
          <select 
            name="time" 
            value={query.time}
            onChange={changeHandler}
            >
            <option value="">Cooking Time</option>
            <option value="More">More than 30 minutes</option>
            <option value="Less">Less than 30 minutes</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
