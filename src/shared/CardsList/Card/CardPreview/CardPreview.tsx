import React from 'react';
import styles from './cardpreview.css';

interface ICardPreviewProps {
    img: string;
}

export function CardPreview({img}: ICardPreviewProps) {
    const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSlyO6ea9vAtMM3mCGv7eho-lhpNxwXEPvQ&usqp=CAU';
  return (
      <div className={styles.previews}>
        <img className={styles.previewsImg}
             src={img.startsWith("https://") ? img : defaultImg}
             alt='img'
        />
      </div>

  );
}
