import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import CompanyStatusButtons from './CompanyStatusButtons'
import CompaniesByStatusContainer from './CompaniesByStatusContainer'

import { OVERVIEW__PAGE_HEADER, statusHeaders } from './OverviewPageConstants'
import { hideExtendedNav } from '../actions/ShowHideActions'
import { sortCompaniesByStatus } from '../actions/SortActions'

import './Overview.css'

export class OverviewPage extends React.Component {

    componentWillMount() {

        this.props.dispatch(sortCompaniesByStatus());
        this.props.dispatch(hideExtendedNav());
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.companies.length !== this.props.companies.length) {

            this.props.dispatch(sortCompaniesByStatus());
        }

    };

    render() {
        const { companies, pending, approved, declined, researching  } = this.props;

        const { view, statusType } = this.props.viewCompaniesByStatus;

        const statusResults = view ? <CompaniesByStatusContainer status={statusType} /> : '';

        return(
            <div>
                <Row>
                    <Col xs={12}>
                        <div className='overview-page-header'>{OVERVIEW__PAGE_HEADER}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='company-stats'>
                              <CompanyStatusButtons className='status-headers'
                                                    text={statusHeaders.total}
                                                    number={companies.length}
                                                    status='companies' />
                              <CompanyStatusButtons className='status-headers Researching-Button'
                                                    text={statusHeaders.researching}
                                                    number={researching.length}
                                                    status='researching'/>
                              <CompanyStatusButtons className='status-headers Pending-Button'
                                                    text={statusHeaders.pending}
                                                    number={pending.length}
                                                    status='pending'/>
                              <CompanyStatusButtons className='status-headers Approved-Button'
                                                    text={statusHeaders.approved}
                                                    number={approved.length}
                                                    status='approved'/>
                              <CompanyStatusButtons className='status-headers Declined-Button'
                                                    text={statusHeaders.declined}
                                                    number={declined.length}
                                                    status='declined'/>
                          </div>
                  </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='list-of-company-by-status-box'>
                            {statusResults}
                        </div>
                    </Col>
                </Row>
          </div>
        );
    };å
};

const mapStateToProps = state => {
    const  { companies, viewCompaniesByStatus, error } = state.app
    const { pending, approved, declined, researching } = state.app.companyStatus

    return {
        companies,
        pending,
        approved,
        declined,
        researching,
        viewCompaniesByStatus,
        error
    }
};

export default connect(mapStateToProps)(OverviewPage)
