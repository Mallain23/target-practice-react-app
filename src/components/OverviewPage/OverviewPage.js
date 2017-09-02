import React from 'react'
import { connect } from 'react-redux'

import CompanyStatusButtons from './CompanyStatusButtons'
import CompaniesByStatusContainer from './CompaniesByStatusContainer'

import { OVERVIEW__PAGE_HEADER, statusHeaders } from './OverviewPageConstants'
import { sortCompaniesByStatus } from '../actions'

import './Overview.css'

export class OverviewPage extends React.Component {

    componentWillMount() {
        //ask andrew how I should handle this
        this.props.dispatch(sortCompaniesByStatus())
    };

    render() {
        const { companies, pending, approved, declined, researching  } = this.props;
        const { view, statusType } = this.props.viewCompaniesByStatus;

        const statusResults = view ? <CompaniesByStatusContainer status={statusType} /> : '';

        return(
            <div className="overview-page container">
                <div className='header'>
                    <h1>{OVERVIEW__PAGE_HEADER}</h1>
                        <ul className='company-status-statistics'>
                            <li><CompanyStatusButtons className='status-headers'
                                                  text={statusHeaders.total}
                                                  number={companies.length}
                                                  status='companies' /></li>
                            <li><CompanyStatusButtons className='status-headers'
                                                  text={statusHeaders.researching}
                                                  number={researching.length}
                                                  status='researching'/></li>
                            <li><CompanyStatusButtons className='status-headers'
                                                  text={statusHeaders.pending}
                                                  number={pending.length}
                                                  status='pending'/></li>
                            <li><CompanyStatusButtons className='status-headers'
                                                  text={statusHeaders.approved}
                                                  number={approved.length}
                                                  status='approved'/></li>
                            <li><CompanyStatusButtons className='status-headers'
                                                  text={statusHeaders.declined}
                                                  number={declined.length}
                                                  status='declined'/></li>
                    </ul>
                    <div className='list-of-company-by-status-box'>
                        {statusResults}
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const  { companies, viewCompaniesByStatus } = state
    const { pending, approved, declined, researching } = state.companyStatus

    return {
        companies,
        pending,
        approved,
        declined,
        researching,
        viewCompaniesByStatus
    }
};

export default connect(mapStateToProps)(OverviewPage)
