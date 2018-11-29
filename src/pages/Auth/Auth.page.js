import React from 'react';
import swal from 'sweetalert2';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'; 
import styles from './Auth.page.module.css';
import { start_login } from './Auth.page.action';
import AuthForm from '../../components/Forms/AuthForm';

class Auth extends React.Component {

	state = {
		submittingForm: false
	};


	handleSubmit = formData => {
		this.setState({
			submittingForm: true
		});

		this.props.start_login(formData);
	}


	redirectOrNotifyOnStatusChange = nextProps => {
		if (nextProps.status === 200) {
			this.setState({
				submittingForm: false
			});

			return this.props.history.push('/dashboard');
		}
		this.setState({
			submittingForm: false
		});
		return swal({
			title: 'Error!',
			text: `${nextProps.message}`,
			type: 'error',
			timer: 2500,
			showConfirmButton: true
		});
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
						<div className={styles.title}>Login to your account</div>
						<div className={styles.description}>All fields are required</div>
					</div>

					<div className={styles.body}>
						<AuthForm onSubmit={this.handleSubmit} submittingForm={this.state.submittingForm} />
						<Link to={{ pathname: '/forgotPassword' }} className={styles.forgotPassword}>forgot password</Link>					
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
		start_login: credentials => dispatch(start_login(credentials)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);