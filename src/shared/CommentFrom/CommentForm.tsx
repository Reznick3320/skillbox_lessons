import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from "react";
import styles from "./commentForm.css";
import {commentContext} from "../context/commentContext";


export function CommentForm() {
    const { value, onChange } = useContext(commentContext);

    function handleSubmit(event:FormEvent) {
        event.preventDefault();
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
        console.log(value);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}