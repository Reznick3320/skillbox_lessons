import React from 'react';
import styles from './cardtextcontent.css';

export function CardTextContent() {
  return (
      <div className={styles.textContent}>
          <div className={styles.metaData}>
              <div className={styles.userLink}>
                  <img className={styles.avatar}
                    src='' alt=''
                  />
                  <a href='#' className={styles.userName}>Руслан Резничук</a>
              </div>
              <span className={styles.createdAt}>4 часа назад</span>
          </div>
          <h2 className={styles.title}>
              <a href='#' className={styles.postLink}>
                  Какой-то текст
              </a>
          </h2>
      </div>
  );
}
