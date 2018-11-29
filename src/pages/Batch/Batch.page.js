import React from 'react';
import { connect } from 'react-redux';
// import swal from '@sweetalert/with-react';
import styles from './Batch.page.module.css';

import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import CustomButton from '../../components/CustomButton';

import { get_batch } from './Batch.page.action';

import { ENUMERATOR } from '../../components/Modal/index';
import { openModal } from '../../components/Modal/Modal.action';


class Batch extends React.Component {

	startVerificationFor = batch => {
		console.dir(batch);
	}


	componentDidMount() {
		console.dir(this.props.batch);
		this.props.get_batch(this.props.match.params.batchId);
	}


	makeDecisionOn = enumerator => {
		
		// window.scrollTop = 0;
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});

		this.props.openModal(ENUMERATOR, enumerator.id);
		// swal({
		// 	content: <Enumerator  />,
		// 	buttons: false
		// });
	}

	render() {


		let candidates = (
			<div className={styles.showLoading}>
				Show Loading
			</div>
		);


		if (this.props.candidates.length) {
			candidates = (
				<table className={styles.table}>
					<thead>
						<tr>
							<th>S/N</th>
							<th>Tradermoni ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Gender</th>
							<th>Phone No.</th>
							<th>Smile Status</th>
							<th>Trade Type</th>
							<th>State</th>
							<th>LGA</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.props.candidates.map(candidate => (

							<tr key={candidate.id}>
								<td>{candidate.id}</td>
								<td>{candidate.trademoni_id}</td>
								<td>{candidate.firstname}</td>
								<td>{candidate.lastname}</td>
								<td>{candidate.gender}</td>
								<td>{candidate.phone}</td>
								<td>{candidate.smile_reference}</td>
								<td>{candidate.tradetype}</td>
								<td>{candidate.state}</td>
								<td>{candidate.lga}</td>
								<td onClick={() => this.makeDecisionOn(candidate)}>
									<i className="fa fa-folder" aria-hidden="true"></i>
								</td>
							</tr>

						))}
					</tbody>
				</table>
			);
		}

		return (
			<div>
				<div>
					<Header />
				</div>

				<div>
					<Breadcrumb name="Batch" />
				</div>


				<div className={styles.container}>
					<div className={styles.agentMembers}>
						<div className={styles.agent}>
							<div className={styles.image}>
								<img src={require('../../assets/images/profile_avatar.png')} />
							</div>
							<div className={styles.details}>


								<div className={styles.detail}>
									<div className={styles.agent_name}>Agoi Abel</div>
								</div>


								<div className={styles.reason}>
									<div className={styles.name}>
										some reasons why this work well and should be given some cash.
										Most Numbers I called went through and was valid.
									</div>
								</div>

								<CustomButton onClick={() => this.startVerificationFor(1)}> Pass batch </CustomButton>

								<div className={styles.stats}>
									<div className={styles.stat}>
										<div className={styles.stat_title}>Agent State</div>
										<div className={styles.stat_value}>Lagos</div>
									</div>

									<div className={styles.stat}>
										<div className={styles.stat_title}>Enumerator</div>
										<div className={styles.stat_value}>Mobile Form</div>
									</div>
								</div>

							</div>
						</div>


						<div className={styles.members}>
							{ candidates }
						</div>
					</div>
				</div>

			</div>
		);

	}
}

const mapStateToProps = state => {
	return {
		batch: state.batchesReducer.batch,
		candidates: state.batchReducer.candidates
	}
}

const mapDispatchToProps = dispatch => {
	return {
		get_batch: (batchId) => dispatch(get_batch(batchId)),
		openModal: (modalType, modalProp) => dispatch(openModal(modalType, modalProp))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Batch);