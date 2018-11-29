import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import styles from './Batches.page.module.css';
import { get_batches, store_batch } from './Batches.page.action';
import Breadcrumb from '../../components/Breadcrumb';
import BatchData from './BatchData'

class Batches extends React.Component {

	state = {}

	navigateTo = batch => {
		this.props.store_batch(batch);
		this.props.history.push(`/batch/${batch.id}`);
	}

	componentDidMount() {
		this.props.get_batches();
	}

	componentWillReceiveProps(nextProps) { }


	showActionFor = batch => {
		this.setState({ showAction: this.state.showAction === batch.id ? null : batch.id });
	}


	render() {

		//I have to deal with error while loading a batch, meaning status is null
		//I have to deal with batch status = 200
		//I have to deal with empty batches
		//I have to deal with non empty batches

		let batches = (
			<div className={styles.showLoading}>
				Show Loading
			</div>
		);


		if (this.props.batches.length) {

			batches = (
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
						{this.props.batches.map(batch => (

							<BatchData key={batch.id} batch={batch} 
									   showAction={this.state.showAction === batch.id} 
									   showActionFor={this.showActionFor} 
									   navigateTo={this.navigateTo} 
							/>

						))};
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
					<Breadcrumb name="Batches" />
				</div>

				<div className={styles.container}>
					{batches}
				</div>
			</div>
		);

	}
}


const mapStateToProps = state => {
	return {
		status: state.batchesReducer.status,
		batches: state.batchesReducer.batches
	}
}

const mapDispatchToProps = dispatch => {
	return {
		get_batches: () => dispatch(get_batches()),
		store_batch: batch => dispatch(store_batch(batch)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Batches);