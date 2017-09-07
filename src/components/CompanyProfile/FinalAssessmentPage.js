import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'


export class FinalAssessmentPage extends React.Component {
    render() {
        const { finalAssessment, overallRating, status } = this.props.selectedCompany

        return (
            <Row>
                <Col xs={12}>
                      <Paragraph className='company-data' text={`Final Assessment: ${finalAssessment}`} />
                      <Paragraph className='company-data' text={`Overall Rating: ${overallRating}`} />
                      <Paragraph className='company-data' text={`Status: ${status}`} />
                </Col>
            </Row>

        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany, status } = state.app

    return {
        selectedCompany,
        status
    };
};

export default connect(mapStateToProps)(FinalAssessmentPage)
