import React from 'react';
import {connect} from 'react-redux';
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';
import styles from './Enumerator.component.module.css';
import { closeModal } from '../Modal.action';

class Enumerator extends React.Component {


    state = {
        reject: false
    }


    rejectHandler = event => {
        this.setState(prevState => ({
            reject: !prevState.reject
        }));
    }


    render() {

        let content = (
            <div>
                <div className={styles.goBack} onClick={this.props.closeModal}>
                    <i class="fa fa-close" aria-hidden="true"></i>  Close
                </div>

                <div className={styles.enumerator}>

                    <div className={styles.enumeratorData}>
                        <img src={require('../../../assets/images/profile_avatar.png')} />
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Name</div>
                        <div className={styles.value}>Agoi Abel</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Date of Birth</div>
                        <div className={styles.value}>26-06-1980</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>State</div>
                        <div className={styles.value}>Lagos State</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>LGA</div>
                        <div className={styles.value}>Alimosho </div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Bank Name</div>
                        <div className={styles.value}>Zenith Bank</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Account number</div>
                        <div className={styles.value}>3030317615</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Phone Number</div>
                        <div className={styles.value}>Address</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Address</div>
                        <div className={styles.value}>No 6. Adeyeye street, Ayobo</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Enumerated on:</div>
                        <div className={styles.value}>26-06-1980</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Trader Type</div>
                        <div className={styles.value}>Food Stuff Vendor</div>
                    </div>
                    <div className={styles.enumeratorData}>
                        <div className={styles.title}>Cluster Location</div>
                        <div className={styles.value}>ONITSHA MARKET</div>
                    </div>

                </div>

                <div className={styles.makeDecision}>
                    <CustomButton onClick={this.rejectHandler}> REJECT </CustomButton>
                </div>
            </div>
        );


        if (this.state.reject === true) {
            content = (
                <div>
                    <div className={styles.action}>
                        <div className={styles.goBack} onClick={this.rejectHandler}>
                            <div><i class="fa fa-arrow-left" aria-hidden="true"></i>  Go Back </div>
                        </div>
                        <div className={styles.goBack} onClick={this.props.closeModal}>
                            <i class="fa fa-close" aria-hidden="true"></i>  Close
                        </div>
                    </div>

                    <CustomInput placeholder="REJECTION MESSAGE" />

                    <div className={styles.makeDecision}>
                        <CustomButton onClick={this.rejectHandler}> SUBMIT REJECTION </CustomButton>
                    </div>
                </div>
            );
        }


        return (
            <div className={styles.modal}>
                <div className={styles.body}>

                    { content }

                </div>
            </div>
        );
    }    
}


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Enumerator);