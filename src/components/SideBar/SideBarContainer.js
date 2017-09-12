import React from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

import './Sidebar.css';

export function SideBarContainer (props) {

    const { showSidebar } = props

    const styles = showSidebar ? {width: '250px'} : {display: 'none'};

    return (
        <Col xs={12} md={1}>
            <div style={styles} className="sidebar sidebar-left">
                <div className='side-bar-header'>Target Search Bar</div>
                <div className='search-form-container'>
                    <SearchForm />
                    <SearchResults />
                </div>
            </div>
        </Col>
    );
};

const mapStateToProps = state => ({
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps)(SideBarContainer)
