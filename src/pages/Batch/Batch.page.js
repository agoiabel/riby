import React from 'react';
import { connect } from 'react-redux';
// import swal from '@sweetalert/with-react';
import styles from './Batch.page.module.css';

import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import CustomButton from '../../components/CustomButton';

import { ENUMERATOR } from '../../components/Modal/index';
import { openModal } from '../../components/Modal/Modal.action';


class Batch extends React.Component {

	state = {
		enumerators: [
			{
				id: 1,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 2,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 3,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 4,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 5,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 6,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 7,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 8,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 9,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 10,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 11,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 12,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 13,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
			{
				id: 14,
				sn: 'MOD-2309399939',
				firstname: 'Akin',
				lastname: 'Olu',
				gender: 'Male',
				phone: '08114247689',
				type: 'Food Stuff Vendor',
				state: 'Anambra',
				lga: 'Akwa South',
				action: 'info',
			},
		]
	}

	startVerificationFor = batch => {
		console.dir(batch);
	}

	makeDecisionOn = enumerator => {
		this.props.openModal(ENUMERATOR, enumerator.id);


		
		// swal({
		// 	content: <Enumerator  />,
		// 	buttons: false
		// });
	}

	render() {
		
		let enumerators = this.state.enumerators.map(enumerator => (
			<tr key={enumerator.id}>
				<td>{enumerator.id}</td>
				<td>{enumerator.sn}</td>
				<td>{enumerator.firstname}</td>
				<td>{enumerator.lastname}</td>
				<td>{enumerator.gender}</td>
				<td>{enumerator.phone}</td>
				<td>{enumerator.type}</td>
				<td>{enumerator.state}</td>
				<td>{enumerator.lga}</td>
				<td onClick={() => this.makeDecisionOn(enumerator)}>
					<i className="fa fa-folder" aria-hidden="true"></i>
				</td>
			</tr>
		));

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
							<table className={styles.table}>
								<thead>
									<tr>
										<th>S/N</th>
										<th>Tradermoni ID</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Gender</th>
										<th>Phone No.</th>
										<th>Trade Type</th>
										<th>State</th>
										<th>LGA</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>

									{ enumerators }


								</tbody>
							</table>
						</div>

					</div>
				</div>

			</div>
		);

	}
}

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
		openModal: (modalType, modalProp) => dispatch(openModal(modalType, modalProp))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Batch);