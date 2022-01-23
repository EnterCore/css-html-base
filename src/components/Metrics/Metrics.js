import React from "react";

import styles from './Metrics.module.scss';
import {ReactComponent as ThinkingGuy} from '../image/thinkingGuy.svg';

function Metrics() {
  return(
    <div className={styles.Metrics}>
      <div className={styles.info}>
        <h2>In-depth metrics</h2>
        <p>Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
        <a>Learn more</a>
      </div>
      <div className={styles.thinkingGuy}>
        <ThinkingGuy/>
      </div>
    </div>
  );
}


export default Metrics;