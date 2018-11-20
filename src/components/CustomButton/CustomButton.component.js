import React from 'react';
import styles from './CustomButton.component.module.css';


const CustomButton = props => {

	

	return (
		<button className={styles.button} {...props}>{props.children}</button>
	);
}



export default CustomButton;