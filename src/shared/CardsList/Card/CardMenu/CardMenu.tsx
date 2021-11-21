import React from 'react';
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {CardsList} from "../../CardsList";
import {CardMenuList} from "./CardMenuList";
import {MenuIcon} from "../../../Icons";

export function CardMenu() {
  return (
      <div className={styles.menu}>
          <Dropdown onOpen={() => {}}
                    onClose={() => {}}
                    button={
                        <button className={styles.menuButton}>
                            <MenuIcon />
                        </button>
                    }>
              <CardMenuList postId="123"/>
          </Dropdown>
      </div>

  );
}
