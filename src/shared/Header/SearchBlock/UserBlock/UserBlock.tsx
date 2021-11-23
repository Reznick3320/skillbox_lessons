import React from "react";
import styles from "./userBlock.css";
import {IconAnon} from "../../../Icons";

interface IUserBlockProps {
    avatarSrc?: string,
    username?: string
}

export function UserBlock({ avatarSrc, username}: IUserBlockProps) {
    return (
        <a
            href='https://www.reddit.com/api/v1/authorize?client_id=tXkgYb9d3y4LHLF8HDTZ-A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
            className={styles.userBox}>
            <div className={styles.avatarBox}>
               {avatarSrc
                   ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>
                   : <IconAnon />
               }
            </div>
            <div className={styles.userName}>
                {username || 'Аноним'}
            </div>
        </a>

    )
}