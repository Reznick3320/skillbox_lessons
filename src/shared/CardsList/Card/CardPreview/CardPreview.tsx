import React from 'react';
import styles from './cardpreview.css';

export function CardPreview() {
  return (
      <div className={styles.previews}>
        <img className={styles.previewsImg}
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSlyO6ea9vAtMM3mCGv7eho-lhpNxwXEPvQ&usqp=CAU'
             alt='img'
        />
      </div>

  );
}
