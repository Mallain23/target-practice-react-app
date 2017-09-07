import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export function OtherBenefitsPage (props) {

    const { services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessment: otherBenefitsAssessment,
            internalOtherBenefitsRating} = props.selectedCompany.otherBenefitsProvided

    return (
        <Row>
            <Col xs={12}>
                  <h3>Other Benefits</h3>
                  <Paragraph className='company-data' text={`Services: ${services}`} />
                  <Paragraph className='company-data' text={`Products: ${products}`} />
                  <Paragraph className='company-data' text={`People: ${people}`} />
                  <Paragraph className='company-data' text={`Revenue Enhancements: ${revenueEnhancements}`} />
                  <Paragraph className='company-data' text={`Miscellaneous: ${miscellaneous}`} />
                  <Paragraph className='company-data' text={`Assessment: ${otherBenefitsAssessment}`} />
                  <Paragraph className='company-data' text={`Rating: ${internalOtherBenefitsRating}`} />
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

export default connect(mapStateToProps)(OtherBenefitsPage)
