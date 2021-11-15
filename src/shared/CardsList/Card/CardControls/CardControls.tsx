import React from 'react';
import styles from './cardcontrols.css';

export function CardControls() {
  return (
      <div className={styles.controls}>
          <button className={styles.controlsDown}>down</button>
          <span className={styles.controlsValue}>123</span>
          <button className={styles.controlsUp}>up</button>
      </div>
  );
}
