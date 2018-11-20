import React from 'react';
import Header from '../../components/Header';
import styles from './Batches.page.module.css';
import Breadcrumb from '../../components/Breadcrumb';
import DisplayStatus from '../../components/DisplayStatus';

class Batches extends React.Component {

	state = {
		batches: [
			{
				id: 1,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 1,
				admin_status: 1,
				action: 'processed'
			},
			{
				id: 2,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 2,
				action: 'processed'
			},
			{
				id: 3,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 3,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 4,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 2,
				action: 'processed'
			},
			{
				id: 5,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 3,
				admin_status: 2,
				action: 'processed'
			},
			{
				id: 6,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 1,
				admin_status: 2,
				action: 'processed'
			},
			{
				id: 7,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 8,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 3,
				admin_status: 1,
				action: 'processed'
			},
			{
				id: 9,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 1,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 10,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 3,
				admin_status: 1,
				action: 'processed'
			},
			{
				id: 11,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 12,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 1,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 13,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 3,
				admin_status: 2,
				action: 'processed'
			},
			{
				id: 14,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 3,
				action: 'processed'
			},
			{
				id: 15,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 2,
				admin_status: 1,
				action: 'processed'
			},
			{
				id: 16,
				sn: '9',
				batch_no: 'Batch-2309399939',
				processed: 'NULL',
				size: 23,
				verifier_status: 1,
				admin_status: 3,
				action: 'processed'
			},
		]
	}

	navigateTo = batch => {
		this.props.history.push(`/batch/${batch.id}`);
	}

	render() {

		let batches = this.state.batches.map(batch => (
			<tr key={batch.id}>
				<td>{batch.sn}</td>
				<td>{batch.batch_no}</td>
				<td>2018-11-01 14:21:02</td>
				<td>null</td>
				<td>{batch.size}</td>
				<td><DisplayStatus status={batch.verifier_status} /></td>
				<td><DisplayStatus status={batch.admin_status} /></td>
				<td onClick={() => this.navigateTo(batch)}><i class="fa fa-folder-open" aria-hidden="true"></i></td>
			</tr>
		));

		return (
			<div>
				<div>
					<Header />
				</div>

				<div>
					<Breadcrumb name="Batches" />
				</div>

				<div className={styles.container}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th>S/N</th>
								<th>BAtch ID</th>
								<th>Created</th>
								<th>Processed</th>
								<th>Batch Size</th>
								<th>Verified Status</th>
								<th>Admin Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{ batches }
						</tbody>
					</table>
				</div>
			</div>
		);
		
	}
}

export default Batches;