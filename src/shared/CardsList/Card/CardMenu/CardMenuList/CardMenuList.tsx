import React from 'react';
import styles from './cardmenulist.css';
import {BlockIcon, ComentsIcon, ComplainIcon, SaveIcon, ShareIcon} from "../../../../Icons";
import {EIcons, Icon} from "../../../../Icons/Icon";

interface IMenuItemListPost {
  postId: string;
}

export function CardMenuList({postId}: IMenuItemListPost) {
  return (
      <ul className={styles.cardMenuList}>
          <li className={styles.menuItem}>
              <Icon name={EIcons.coments} size={15} />
              Коментарии
          </li>
          <li className={styles.menuItem}>
              <Icon name={EIcons.share} size={15} />
              Поделиться
          </li>
          <li className={styles.menuItem}>
              <Icon name={EIcons.block} size={15}/>
              Скрыть
          </li>
          <li className={styles.menuItem}>
              <Icon name={EIcons.save} size={15}/>
              Сохранить
          </li>
          <li className={styles.menuItem}>
              <Icon name={EIcons.complains} size={15}/>
              Пожаловаться
          </li>
      </ul>
  );
}
