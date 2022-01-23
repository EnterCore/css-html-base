import React from "react";

import styles from '../Subscription/Subscription.module.scss';
import {ReactComponent as ThinkingGuy} from '../image/thinkingGuy.svg';

function Subscription() {
  return(
    <div className={styles.subscription}>
      <div className={styles.thinkingGuy}>
        <ThinkingGuy/>
      </div>
      <div className={styles.info}>
        <h2>Subscription index</h2>
        <p>A daily dataset to keep you up to date on subscription market  trends and what's happening in your vertical.</p>
        <a>Learn more</a>
      </div>
    </div>
  );
}

export default Subscription;