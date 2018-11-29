import React from 'react';

const CustomSelect = props => {

    const { input, meta, label } = props;

    const inputError = (meta.invalid && meta.touched) ? styles.formControlError : '';
    const inputValid = (meta.valid && meta.touched) ? styles.formControlValid : '';

    const classes = `${styles.formControl} ${inputError} ${inputValid}`;
    
    return (
        <div className={styles.formGroup}>

            <label>{label}</label>

            <select className={classes} {...input}>
                {props.options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>

            {
                (meta.error && meta.touched) && (
                    <div className={styles.errorText}>{meta.error}</div>
                )
            }
        </div>
    );
}

export default CustomSelect;