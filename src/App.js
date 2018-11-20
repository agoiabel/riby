import React from 'react';
import Auth from './pages/Auth';
import Batch from './pages/Batch';
import Batches from './pages/Batches';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import {Route, Switch, Redirect} from 'react-router-dom';
import ModalManager from './components/Modal/ModalManager.component';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <ModalManager />

        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/batches" exact component={Batches} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/batch/:batchId" exact component={Batch} />
          <Route path="/resetPassword" exact component={ResetPassword} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />          
          <Redirect to="/" />
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;