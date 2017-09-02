import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

import NavBar from './components/Navigation/NavBar';
import SideBarContainer from './components/SideBar/SideBarContainer';
import Page from './components/Page/Page';
import CompanyPage from './components/CompanyPage/CompanyPage'

import './App.css';

class App extends React.Component {
    render() {
        return (
          <div>
              <NavBar />
              <SideBarContainer />
              <Route exact path='/' component={Page} />
              <Route exact path='/company/:companyName' component={Page}/>
          </div>
        );
    };
};

export default withRouter(connect()(App));
