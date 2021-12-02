import React from "react";
import styles from "./userBlock.css";
import {IconAnon} from "../../../Icons";

interface IUserBlockProps {
    avatarSrc?: string,
    username?: string,
    loading?: boolean,
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
    return (
        <a
            href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
            className={styles.userBox}>
            <div className={styles.avatarBox}>
               {avatarSrc
                   ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage}/>
                   : <IconAnon />
               }
            </div>
            <div className={styles.userName}>
                {loading ?(
                    <p>Загрузка...</p>
                    
                ): (
                    <p>{username || 'Аноним'}</p>
                )}
            </div>
        </a>

    )
}