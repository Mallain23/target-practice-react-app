import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import NavBar from './components/Navigation/NavBar';
import Page from './components/Page/Page';
import AddTargetModalContainer from './components/AddCompanyModal/AddTargetModalContainer';
import FullFinancialReport from './components/FinancialPage/FullFinancialReport';
import EditPageModal from './components/EditPageModal/EditPageModal';

import './App.css';

class App extends React.Component {
    render() {
        return (
          <div>
              <NavBar />
              <AddTargetModalContainer />
              <EditPageModal />
              <Route exact path='/' component={Page} />
              <Route exact path='/company/:companyName' component={Page}/>
              <Route exact path='/finacialreport/:title/:typeOfReport' component={FullFinancialReport} />
          </div>
        );
    };
};


export default withRouter(connect()(App));
