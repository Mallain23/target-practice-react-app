import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { sortFunction } from '../actions/utils';

import './Overview.css'

export function CompaniesByStatusContainer (props) {

    const { status, companies, companyStatus } = props;

    const companiesToDisplay = status === 'companies' ? companies : companyStatus[status]
    const sortedCompaniesToDisplay = sortFunction(companiesToDisplay, 'companyName');

    const formattedCompanies = sortedCompaniesToDisplay.map(({companyName}, index) => {
        return (
            <li className={`company-by-status`} key={index}>
                <Link to={`/company/${companyName}`} className={`${status} company-link`}> {companyName}</Link>
            </li>
        );
    });

    return (
        <ul className='company-list-by-status'>
            {formattedCompanies}
        </ul>
    );
};

const mapStateToProps = state => {
    const { pending, approved, declined, researching } = state.app.companyStatus;
    const { companies, companyStatus } = state.app

    return {
        companies,
        companyStatus,
        pending,
        approved,
        declined,
        researching
    };
};

export default connect(mapStateToProps)(CompaniesByStatusContainer)
