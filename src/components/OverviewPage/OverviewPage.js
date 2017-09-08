import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import CompanyStatusButtons from './CompanyStatusButtons'
import CompaniesByStatusContainer from './CompaniesByStatusContainer'

import { OVERVIEW__PAGE_HEADER, statusHeaders } from './OverviewPageConstants'
import { hideExtendedNav } from '../actions/ShowHideActions'
import { sortCompaniesByStatus, sortCompanies} from '../actions/SortActions'

import './Overview.css'

export class OverviewPage extends React.Component {

    componentWillMount() {
        //ask andrew how I should handle this

        this.props.dispatch(sortCompaniesByStatus());
        this.props.dispatch(hideExtendedNav());
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.companies.length !== this.props.companies.length) {

          //  this.props.dispatch(sortCompanies('companyName'));
            this.props.dispatch(sortCompaniesByStatus());
        }

    };

    render() {
        const { companies, pending, approved, declined, researching  } = this.props;

        const { view, statusType } = this.props.viewCompaniesByStatus;

        const statusResults = view ? <CompaniesByStatusContainer status={statusType} /> : '';

        return(
            <Grid className="overview-page container">
                <Row>
                    <Col xs={12}>
                        <h1>{OVERVIEW__PAGE_HEADER}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
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
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='list-of-company-by-status-box'>
                            {statusResults}
                        </div>
                    </Col>
                </Row>
            </Grid>
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
