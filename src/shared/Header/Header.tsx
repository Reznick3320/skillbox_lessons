import React from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {TreadTitle} from "./TreadTitle";
import {SortBlock} from "./SortBlock";

interface IHeaderProps {
    token: string
}

export function Header({ token }: IHeaderProps) {
  return (
      <header className={styles.header}>
          <TreadTitle />
          <SortBlock  />
          <SearchBlock token={token}/>
      </header>

  );
}
