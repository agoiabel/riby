import React from 'react';
import { Link } from 'react-router-dom'; 
import { withRouter } from 'react-router';
import styles from './Header.component.module.css';
import { removeStorage } from '../../utils/storage';

class Header extends React.Component {
	
	logout = () => {
		removeStorage("RIBY:AUTH_USER_ID");

		return this.props.history.push('/');
	}

	render() {
		return (
			<div className={styles.headerContainer}>
				<div className={styles.container}>
					<div className={styles.header}>

						<div className={styles.logoNav}>

							<div className={styles.logo}><a><img src={require('../../assets/images/logo.svg')} /></a></div>
							<div className={styles.navItems}>
								<div className={[styles.navItem, styles.active].join(" ")}>
									<Link to={{ pathname: '/dashboard' }}>Dashboard</Link>
								</div>
								<div className={styles.navItem}>
									<Link to={{ pathname: '/batches' }}>Batches</Link>
								</div>
								{/* <div className={styles.navItem}>
								<a>Verifiers</a>
							</div> */}
							</div>

						</div>

						<a className={styles.account} onClick={this.logout}>
							<i className="fa fa-sign-out" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		);
	}

}

export default withRouter(Header);