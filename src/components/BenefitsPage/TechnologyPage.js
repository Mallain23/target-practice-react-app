import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export function TechnologyPage (props) {
    const { licenses,
            softwareUse,
            benefits,
            assessment: technologyAssessment,
            internalTechRating } = props.selectedCompany.technology

    return (
        <Row>
            <Col xs={12}>
                  <h3>Technology Benefits</h3>
                  <Paragraph className='company-data' text={`Licenses: ${licenses}`} />
                  <Paragraph className='company-data' text={`Software: ${softwareUse}`} />
                  <Paragraph className='company-data' text={`Assessment: ${technologyAssessment}`} />
                  <Paragraph className='company-data' text={`Rating: ${internalTechRating}`} />
            </Col>
        </Row>
    );
};

export const mapStateToProps = state => {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(TechnologyPage)
