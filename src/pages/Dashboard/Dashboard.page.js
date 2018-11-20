import React from 'react';
import Header from '../../components/Header';
import styles from './Dashboard.page.module.css';
import Breadcrumb from '../../components/Breadcrumb';

class Dashboard extends React.Component {

	navigateTo = page => {
		this.props.history.push(page);
	}

	render() {
		return (
			<div>
				<div>
					<Header />
				</div>

				<div>
					<Breadcrumb name="Dashboard" />
				</div>

				<div className={styles.dashboard}>

					<div className={styles.sidebar}>
						<div className={styles.navTitle}>Navigations</div>

						<div className={styles.navigations}>

							<div className={[styles.navigation, styles.active].join(' ')} onClick={() => this.navigateTo('/dashboard')}>
								<div className={styles.navIcon}><i class="fa fa-tachometer" aria-hidden="true"></i></div>
								<div>Dashboard</div>
							</div>

							<div className={styles.navigation} onClick={() => this.navigateTo('/batches')}>
								<div className={styles.navIcon}><i class="fa fa-briefcase" aria-hidden="true"></i></div>
								<div>Batches</div>
							</div>

							<div className={styles.navigation}>
								<div className={styles.navIcon}><i class="fa fa-female" aria-hidden="true"></i></div>
								<div>Verifiers</div>
							</div>

						</div>
					</div>

					<div className={styles.content}>

						<div className={styles.stats}>
						
							<div className={styles.stat}>
								<div className={styles.statIcon}><i className="fa fa-briefcase" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>

							<div className={styles.stat}>
								<div className={styles.statIcon}><i class="fa fa-hourglass-half" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Pending Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>

							<div className={styles.stat}>
								<div className={styles.statIcon}><i class="fa fa-check-square-o" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Approved Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>

							<div className={styles.stat}>
								<div className={styles.statIcon}><i className="fa fa-window-close-o" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Declined Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>


							<div className={styles.stat}>
								<div className={styles.statIcon}><i class="fa fa-users" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Enumerators</div>
								<div className={styles.statNumber}>45</div>
							</div>


							<div className={styles.stat}>
								<div className={styles.statIcon}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Candidate Verified</div>
								<div className={styles.statNumber}>45</div>
							</div>


							<div className={styles.stat}>
								<div className={styles.statIcon}><i class="fa fa-power-off" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Candidate Rejected</div>
								<div className={styles.statNumber}>45</div>
							</div>


							<div className={styles.stat}>
								<div className={styles.statIcon}><i className="fa fa-briefcase" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>


							<div className={styles.stat}>
								<div className={styles.statIcon}><i className="fa fa-briefcase" aria-hidden="true"></i></div>
								<div className={styles.statTitle}>Total Batches</div>
								<div className={styles.statNumber}>45</div>
							</div>


						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;