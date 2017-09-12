import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Grid } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getFinacnialReport } from '../actions'

import './FinancialPage.css'

export class FullFinancialReport extends React.Component {

    componentWillMount() {

        const title = this.props.match.params.title
        const typeOfReport = this.props.match.params.typeOfReport
        this.props.dispatch(getFinacnialReport(title, typeOfReport))
    }

    render() {

        const { selectedCompany, selectedFinancialReport } = this.props

        return (
            <Grid>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={11}>
                        <div className='statement-title-header'>
                            <h3 className='statement-title'>
                                {selectedFinancialReport.title}
                                <span className='divider'> | </span>
                                <Link className='back-link' to={`/company/${selectedCompany.companyName}`}>Back </Link>
                            </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={11}>
                        <div className='statement-container'>{selectedFinancialReport.Report} </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={11}>
                        <div className='footer'></div>
                    </Col>
                </Row>
           </Grid>
        );
    };
};

export const mapStateToProps = state => {
    const { selectedFinancialReport, selectedCompany } = state.app

    return {
        selectedFinancialReport: selectedFinancialReport || '',
        selectedCompany
    };
};

export default connect(mapStateToProps)(FullFinancialReport)
