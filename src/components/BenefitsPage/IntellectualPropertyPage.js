import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export function IntellectualPropertyPage (props) {

    const { patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating } = props.selectedCompany.intellectualProperty

    return (
        <Row>
            <Col xs={12}>
                  <h3>Intellectual Property Benefits</h3>
                  <Paragraph className='company-data' text={`Information on Patents held by the Target: ${patents}`} />
                  <Paragraph className='company-data' text={`Information on Trademarks held by the Target: ${trademarks}`} />
                  <Paragraph className='company-data' text={`Information on Copyrights held by the Target: ${copyrights}`} />
                  <Paragraph className='company-data' text={`Negative Impacts or Concerns from IP: ${negative}`} />
                  <Paragraph className='company-data' text={`Assessment of IP: ${internalAssessmentOfIP}`} />
                  <Paragraph className='company-data' text={`Rating: ${internalIPRating}`} />
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

export default connect(mapStateToProps)(IntellectualPropertyPage)
