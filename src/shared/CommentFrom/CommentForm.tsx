import React, {ChangeEvent, FormEvent, useState} from "react";
import styles from "./commentForm.css";


export function CommentForm() {
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const [valueError, setValueError] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setTouched(true)
        setValueError(validateValue());

        const isFormValid = !validateValue();

        if (!isFormValid) return;

        alert('Форма отпралена!');
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value)
    }

    function validateValue() {
        if (value.length <=3) return 'Введите больше 3-х символов!'
        return '';
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea 
                className={styles.input} 
                value={value} 
                onChange={handleChange} 
                aria-invalid = {valueError ? 'true' : undefined} 
            />
                {touched && valueError && (<div>{valueError}</div>)}
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    );
}