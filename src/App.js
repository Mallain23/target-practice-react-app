import React from 'react';

import NavBar from './components/Navigation/NavBar';
import SideBar from './components/SideBar/SideBarContainer';
import Page from './components/Page/Page';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <NavBar />
        );
    };
};

export default App;

// <SideBarContainer />
// <Page />
