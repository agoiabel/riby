import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Header.component.module.css';

const Header = props => {
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
							<div className={styles.navItem}>
								<a>Verifiers</a>
							</div>
						</div>

					</div>

					<Link to={{ pathname: '/' }} className={styles.account}><i className="fa fa-sign-out" aria-hidden="true"></i></Link>
				</div>
			</div>
		</div>
	);
}

export default Header;