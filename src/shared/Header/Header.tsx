import React from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {TreadTitle} from "./TreadTitle";
import {SortBlock} from "./SortBlock";
import {UserBlock} from "./SearchBlock/UserBlock";

export function Header() {
  return (
      <header className={styles.header}>
          <TreadTitle />
          <SortBlock />
          <UserBlock />
      </header>

  );
}
