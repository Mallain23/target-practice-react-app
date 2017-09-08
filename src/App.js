
import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import NavBar from './components/Navigation/NavBar';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Page from './components/Page/Page';
import CompanyPage from './components/CompanyPage/CompanyPage';
import CompanyDataModalContainer from './components/AddCompanyModal/CompanyDataModalContainer';
import FullFinancialReport from './components/FinancialPage/FullFinancialReport';
import EditPageModal from './components/EditPageModal/EditPageModal';

import './App.css';

class App extends React.Component {
    render() {
        return (
          <div>
              <NavBar />
              <CompanyDataModalContainer />
              <EditPageModal />
              <Route exact path='/' component={Page} />
              <Route exact path='/company/:companyName' component={Page}/>
              <Route exact path='/finacialreport/:title/:typeOfReport' component={FullFinancialReport} />
          </div>
        );
    };
};


export default withRouter(connect()(App));
