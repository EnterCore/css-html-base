import React from "react";
import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../image/logo.svg';

function Header (){
  return(
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}> 
          <Logo/>
        </div>
       <div className={styles.navBar}>
         <ul className={styles.nav}>
           <li>
             <a className={styles.navLink} href="#1">Home</a>
           </li>
           <li>
             <a className={styles.navLink} href="#1">Features</a>
           </li>
           <li>
             <a className={styles.navLink} href="#1">Pricing</a>
           </li>
           <li>
             <a className={styles.navLink} href="#1">Blog</a>
           </li>
         </ul>
       </div>
       <div className={styles.btnContent}>
         <button className={styles.startBtn}>Get Started</button>
       </div>
      </div>
    </header>
  );
}


export default Header;