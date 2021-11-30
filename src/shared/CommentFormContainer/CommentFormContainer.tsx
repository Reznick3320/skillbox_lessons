import React, {ChangeEvent, FormEvent} from "react";
import {useDispatch, useSelector } from "react-redux";
import { CommentForm } from "../CommentFrom";
import {TRootState, upDateComment} from '../store';


export function CommentFormContainer() {
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
        <CommentForm
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
}