import React from 'react';
import PropTypes from 'prop-types';
import styles from './CustomInput.component.module.css';

const CustomInput = props => {

	let className = [styles.formControl]
	let hint = null;

	if (props.valid === "false" && props.touched === "true") {
		className.push(styles.formError);
	}

	return (
	    <div className={styles.formGroup}>
			<input className={className.join(' ')} {...props} />
	    </div>


	);

}

CustomInput.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default CustomInput;