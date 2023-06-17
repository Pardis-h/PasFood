import styles from './Attributes.module.css';
import Fast from '../icons/Fast'
import Food from '../icons/Food'
import Choice from '../icons/Choice'
import Clock from '../icons/Clock'

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <ul>
        <li>
          <Fast/>
          <p>Fast</p>
        </li>
        <li>
          <Food/>
          <p>Best Resturants</p>
        </li>
        <li>
          <Choice/>
          <p>Your Choice</p>
        </li>
        <li>
          <Clock/>
          <p>24 / 7</p>
        </li>
      </ul>
    </div>
  )
}

export default Attributes