import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortCompaniesByStatus } from '../actions'

export class CompaniesByStatusContainer extends React.Component {

    render() {
        const { status, companies, companyStatus } = this.props

        const companiesToDisplay = status === 'companies' ? companies :  companyStatus[status]
        const formattedCompanies = companiesToDisplay.map(({companyName}, index) => {
            return (
                <li key={index}>
                    <Link to={`/company/${companyName}`} className='company-link'> {companyName}</Link>
                </li>
            );
        });

        return (
            <ul className='company-list-by-status'>
                {formattedCompanies}
            </ul>
        );
    };
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
