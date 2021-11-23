import React from 'react';
import styles from './cardmenu.css';
import {Dropdown} from "../../../Dropdown";
import {CardMenuList} from "./CardMenuList";
import {EIcons, Icon} from "../../../Icons/Icon";

export function CardMenu() {
  return (
      <div className={styles.menu}>
          <Dropdown onOpen={() => {}}
                    onClose={() => {}}
                    button={
                        <button className={styles.menuButton}>
                            <Icon name={EIcons.menu} size={15} />
                        </button>
                    }>
              <CardMenuList postId="123"/>
          </Dropdown>
      </div>

  );
}
