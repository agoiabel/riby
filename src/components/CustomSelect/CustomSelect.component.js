import React from 'react';
import styles from './CustomSelect.component.module.css';

const CustomSelect = props => {

    return (
        <div className={styles.formGroup}>
            <select className={styles.formControl} value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CustomSelect;