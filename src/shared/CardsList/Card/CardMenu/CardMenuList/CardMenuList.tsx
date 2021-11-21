import React from 'react';
import styles from './cardmenulist.css';

interface IMenuItemListPost {
  postId: string;
}

export function CardMenuList({postId}: IMenuItemListPost) {
  return (
      <ul className={styles.cardMenuList}>
        <li onClick={() => console.log(postId)} className={styles.menuItem}>Коментарии</li>
        <li className={styles.menuItem}>Поделиться</li>
        <li className={styles.menuItem}>Скрыть</li>
        <li className={styles.menuItem}>Сохранить</li>
        <li className={styles.menuItem}>Пожаловаться</li>
      </ul>
  );
}
