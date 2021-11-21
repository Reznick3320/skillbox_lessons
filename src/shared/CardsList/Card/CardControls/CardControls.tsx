import React from 'react';
import styles from './cardcontrols.css';
import {CardControlsDown, CardControlsUp} from "../../../Icons";

export function CardControls() {
  return (
      <div className={styles.controls}>
          <button className={styles.controlsDown}>
              <CardControlsUp />
          </button>
          <span className={styles.controlsValue}>123</span>
          <button className={styles.controlsUp}>
              <CardControlsDown />
          </button>
      </div>
  );
}
