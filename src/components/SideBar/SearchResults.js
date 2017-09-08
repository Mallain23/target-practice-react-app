import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { sortFunction } from '../actions/utils'

import './Sidebar.css'

export function SearchResults (props) {

    const {  searchResults, sortOption } = props
    const sortedResults = sortFunction(searchResults, sortOption)

    const formatedSearchResults = sortedResults.map(({ companyName, status }, index) => {
        return (
            <li className='company-list' key={index}>
                <Link to={`/company/${companyName}`}
                      className={`search-result-item ${status}`}>
                      <strong>{companyName}</strong>
                </Link>
            </li>
       );
    });

    return (
        <div className='search-results-container'>
            <ul>
                {formatedSearchResults}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {

    const { searchResults, sortOption } = state.app

    return {
        searchResults,
        sortOption
    };
};

export default connect(mapStateToProps)(SearchResults)
