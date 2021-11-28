import React from 'react';
import styles from './card.css';
import {CardTextContent} from "./CardTextContent";
import {CardPreview} from "./CardPreview";
import {CardMenu} from "./CardMenu";
import {CardControls} from "./CardControls";

interface IPostProps {
    post: {
        id: string,
        title: string,
        img: string
    }
    author: {
        title: string,
        img: string
    }
}

export function Card({post, author}: IPostProps) {
  return (
      <li className={styles.card}>
          <CardPreview img={post.img}/>
          <CardTextContent post={post} author={author} />
          <CardMenu />
          <CardControls />
      </li>
  );
}
