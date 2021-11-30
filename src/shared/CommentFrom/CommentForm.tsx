import React, {ChangeEvent, FormEvent, useContext, useRef, useState} from "react";
import styles from "./commentForm.css";
import {useDispatch, useSelector, useStore} from "react-redux";
import {TRootState, upDateComment} from '../store';


export function CommentForm() {
    const value = useSelector<TRootState, string>(state => state.commentText)
    const dispatch = useDispatch();

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(upDateComment(event.target.value))
    }

    function handleSubmit(event:FormEvent) {
        event.preventDefault();
        console.log(value);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} value={value} onChange={handleChange}/>
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}