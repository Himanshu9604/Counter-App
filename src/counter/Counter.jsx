import React,{useState} from 'react'
import styles from './Counter.module.css'
function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    const handleIncrementTen = () => {
      setCount(count + 10);
    };
  
    const handleDecrementTen = () => {
      setCount(count - 10);
    };
  
    return (
      <div className={styles.container}>
        <h1>Counter App</h1>
        <div className={styles.blueButtonsContainer}>
            
          <button className={styles.blueButton} onClick={handleIncrement}>
            &#9650;
          </button>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={handleDecrement}>
            &#9660;
          </button>
          <div className={styles.counter}>{count}</div>
          <button className={styles.button} onClick={handleIncrementTen}>
            &#9654;
          </button>
        </div>
        <div className={styles.blueButtonsContainer}>
          <button className={styles.blueButton} onClick={handleDecrementTen}>
            &#9664;
          </button>
        </div>
      </div>
    );
  };
export default Counter