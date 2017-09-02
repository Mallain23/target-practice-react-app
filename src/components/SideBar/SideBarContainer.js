import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import './Sidebar.css'

export default class SideBarContainer extends React.Component {

    render() {
        return (
          <div className="sidebar sidebar-left">
              <div className='search-form-container'>
                  <SearchForm />
                  <SearchResults />
              </div>
          </div>
        );
    };
};
