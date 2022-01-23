import React from "react";

import styles from './GrowBuisness.module.scss';
import {ReactComponent as Arrow} from '../image/arrow.svg';
import {ReactComponent as Skate} from '../image/skateGuy.svg';
import {ReactComponent as LogoPlanet} from '../image/logoPlanet.svg';
import {ReactComponent as LogoDash} from '../image/logoDash.svg';
import {ReactComponent as LogoFigures} from '../image/logoFigures.svg';
import {ReactComponent as LogoSun} from '../image/logoSun.svg';
import {ReactComponent as LogoSquere} from '../image/logoSquare.svg';

function GrowBuisness(){
  return(
    <div className={styles.growBuisness}>
      <div className={styles.upperContent}>
        <div className={styles.leftInfo}>
          <h1>Grow your subscription business</h1>
          <p>Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
          <div className={styles.btnContent}>
            <button className={styles.startBtn}>Get Started</button>
           <button className={styles.arrowBtn}>{<Arrow/>}</button>
          </div>
        </div>
        <div className={styles.righPicture}>
         <Skate/>
        </div>
      </div>
      <div className={styles.logoVariant}>
        <LogoPlanet/>
        <LogoDash/>
        <LogoFigures/>
        <LogoSun/>
        <LogoSquere/>
      </div>
    </div> 
  );
}


export default GrowBuisness;