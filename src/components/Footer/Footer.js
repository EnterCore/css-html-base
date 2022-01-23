import React from "react";

import styles from './Footer.module.scss'
import {ReactComponent as Card} from '../image/card.svg';
import {ReactComponent as Calculator} from '../image/calculator.svg';
import {ReactComponent as Photo} from '../image/photo.svg';

function Footer() {
  return(
    <div className={styles.Footer}>
      <div className={styles.card}>
        <Card className={styles.footerPicture}/>
        <h3>Benchmarks</h3>
        <p>See how you stack up against comparable companies in similar stages.</p>
      </div>
      <div className={styles.card}>
        <Calculator className={styles.footerPicture}/>
        <h3>Pricing Audit</h3>
        <p>Benchmark the health of your monetization and pricing strategy.</p>
      </div>
      <div className={styles.card}>
        <Photo className={styles.footerPicture}/>
        <h3>Retention Audit</h3>
        <p>Audit where revenue leakage exists and where you can increase retention.</p>
      </div>
    </div>
  );
}

export default Footer;