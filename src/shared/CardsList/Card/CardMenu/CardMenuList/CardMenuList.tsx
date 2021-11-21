import React from 'react';
import styles from './cardmenulist.css';
import {BlockIcon, ComentsIcon, ComplainIcon, SaveIcon, ShareIcon} from "../../../../Icons";

interface IMenuItemListPost {
  postId: string;
}

export function CardMenuList({postId}: IMenuItemListPost) {
  return (
      <ul className={styles.cardMenuList}>
        <li onClick={() => console.log(postId)} className={styles.menuItem}><ComentsIcon/> Коментарии</li>
        <li className={styles.menuItem}><ShareIcon/> Поделиться</li>
        <li className={styles.menuItem}><BlockIcon/> Скрыть</li>
        <li className={styles.menuItem}><SaveIcon/> Сохранить</li>
        <li className={styles.menuItem}><ComplainIcon/> Пожаловаться</li>
      </ul>
  );
}
