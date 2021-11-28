import React from 'react';
import styles from './cardpreview.css';

interface ICardPreviewProps {
    img: string;
}

export function CardPreview({img}: ICardPreviewProps) {
    const defaultImg = 'https://b.thumbs.redditmedia.com/6WNaJtSmMT3l4IrI6f-FNgb-PPUgjwTce6QCyT-ScJI.jpg';
  return (
      <div className={styles.previews}>
        <img className={styles.previews}
             src={img.startsWith("https://") ? img : defaultImg}
             alt='img'
        />
      </div>

  );
}
