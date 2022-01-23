import React from 'react';

import styles from './App.module.scss';
import Header from '../Header/Header.js';
import GrowBuisness from '../GrowBuisness/GrowBuisness.js';
import Subscription from '../Subscription/Subscription.js';
import Metrics from '../Metrics/Metrics.js';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <GrowBuisness/>
      <Subscription/>
      <Metrics/>
      <Footer/>
    </div>
  );
}

export default App;
