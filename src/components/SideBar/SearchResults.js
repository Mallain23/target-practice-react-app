import React from 'react'
import { connect } from 'react-redux'

import './Sidebar.css'

export class SearchResults extends React.Component {

    render() {
        const {  searchResults } = this.props

        const formatedSearchResults = searchResults.map(({ companyName, status }, index) => {
            return (
                <li  key={index}
                     onClick={this.handleClick}
                     className={`search-result-item ${status}`} >
                     <strong>{companyName}</strong>
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
};

const mapStateToProps = state => {

    const { searchResults, key } = state.app

    return {
        searchResults,
        updateKey: key
    };
};

export default connect(mapStateToProps)(SearchResults)
