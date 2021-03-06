import React from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {TreadTitle} from "./TreadTitle";
import {SortBlock} from "./SortBlock";


export function Header() {

  return (
      <header className={styles.header}>
          <SearchBlock />
          <TreadTitle />
          <SortBlock  />
      </header>

  );
}
