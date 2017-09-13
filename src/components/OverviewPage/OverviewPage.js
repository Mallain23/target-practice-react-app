import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import { OVERVIEW__PAGE_HEADER, statusHeaders } from './OverviewPageConstants';
import { sortCompaniesByStatus } from '../actions/SortActions';

import CompanyStatusButtons from './CompanyStatusButtons';
import CompaniesByStatusContainer from './CompaniesByStatusContainer';

import './Overview.css';

export class OverviewPage extends React.Component {

    componentWillMount() {

        this.props.dispatch(sortCompaniesByStatus());
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.companies.length !== this.props.companies.length) {

            this.props.dispatch(sortCompaniesByStatus());
        }

    };

    render() {

        const {
            companies,
            pending,
            approved,
            declined,
            researching
        } = this.props;

        const { view, statusType } = this.props.viewCompaniesByStatus;

        const statusResults = view ? <CompaniesByStatusContainer status={statusType} /> : '';

        return(
            <div>
                <Row>
                    <Col xs={1}>
                    </Col>
                    <Col xs={11}>
                        <div className='overview-page-header'>{OVERVIEW__PAGE_HEADER}</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='image-container'>
                            <img alt='target' className='target-image' src='data:image/jpeg;base64,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'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='company-stats'>
                              <CompanyStatusButtons
                                  className='status-headers'
                                  text={statusHeaders.total}
                                  number={companies.length}
                                  status='companies' />
                              <CompanyStatusButtons
                                  className='status-headers Researching-Button'
                                  text={statusHeaders.researching}
                                  number={researching.length}
                                  status='researching'/>
                              <CompanyStatusButtons
                                  className='status-headers Pending-Button'
                                  text={statusHeaders.pending}
                                  number={pending.length}
                                  status='pending'/>
                              <CompanyStatusButtons
                                  className='status-headers Approved-Button'
                                  text={statusHeaders.approved}
                                  number={approved.length}
                                  status='approved'/>
                              <CompanyStatusButtons
                                  className='status-headers Declined-Button'
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
    };
};

const mapStateToProps = state => {
    const  { companies, viewCompaniesByStatus, error } = state.app;
    const { pending, approved, declined, researching } = state.app.companyStatus;

    return {
        companies,
        pending,
        approved,
        declined,
        researching,
        viewCompaniesByStatus,
        error
    };
};

export default connect(mapStateToProps)(OverviewPage)
