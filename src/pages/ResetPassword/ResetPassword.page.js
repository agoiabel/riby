import React from 'react';
import swal from 'sweetalert2';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'; 
import validate from '../../utils/validation';
import styles from './ResetPassword.page.module.css';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

class ResetPassword extends React.Component {

	state = {
		showLoading: false,
		formIsValid: false,
		formControls: {
			password: {
				value: "",
				valid: false,
				validationRules: {
					isRequired: true
				},
				placeholderText: "Password",
				touched: false,
			},
			password_confirmation: {
				value: "",
				valid: false,
				validationRules: {
					isRequired: true
				},
				placeholderText: "Confirm Password",
				touched: false,
			}
		}
	};

	inputChangeHandler = event => {

		const name = event.target.name;
		const value = (event.target.type === 'file') ? event.target.files[0] : event.target.value;

		const updatedControls = {
			...this.state.formControls
		};
		const updatedFormElement = {
			...updatedControls[name]
		};
		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

		updatedControls[name] = updatedFormElement;


		let formIsValid = true;
		for (let inputIdentifier in updatedControls) {
			formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
		}

		this.setState({
			formControls: updatedControls,
			formIsValid: formIsValid
		});
	}


	submitFormHandler = () => {
		const formData = {};
		for (let formElementId in this.state.formControls) {
			formData[formElementId] = this.state.formControls[formElementId].value;
		}
		this.setState({
			showLoading: true
		});

		this.props.start_login(formData);
	}


	redirectOrNotifyOnStatusChange = nextProps => {
		if (nextProps.status === 200) {
			this.setState({
				showLoading: false
			});

			console.dir('can relocate to dashboard');
		}
		if ((nextProps.status === 422) && !(nextProps.message === this.props.message)) {
			this.setState({
				showLoading: false
			});
			return swal({
				title: 'Error!',
				text: `${nextProps.message}`,
				type: 'error',
				timer: 2500,
				showConfirmButton: true
			});
		}
	}


	componentWillReceiveProps(nextProps) {
		this.redirectOrNotifyOnStatusChange(nextProps);
	}


	render() {
		return (
			<div className={styles.container}>
				<ul className="cbSlideshow">
					<li><span>Image 01</span></li>
					<li><span>Image 02</span></li>
					<li><span>Image 03</span></li>
					<li><span>Image 04</span></li>
					<li><span>Image 05</span></li>
					<li><span>Image 06</span></li>
				</ul>


				<div className={styles.formContainer}>
					<div className={styles.header}>
						<div className={styles.title}>Reset Password</div>
						<div className={styles.description}>All fields are required</div>
					</div>


					<div className={styles.body}>
						<CustomInput name="password" type="password" onChange={this.inputChangeHandler} placeholder="Password" />

						<CustomInput name="password_confirmation" type="password" onChange={this.inputChangeHandler} placeholder="Confirm Password" />

						<CustomButton onClick={this.submitFormHandler}>send</CustomButton>
						<Link to={{ pathname: '/' }} className={styles.forgotPassword}>login</Link>
					</div>
				</div>	



			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		status: state.authReducer.status,
		message: state.authReducer.message
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// start_login: credentials => dispatch(start_login(credentials)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);