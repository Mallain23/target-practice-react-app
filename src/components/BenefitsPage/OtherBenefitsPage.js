import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

import '../CompanyProfile/CompanyProfile.css'

export function OtherBenefitsPage (props) {

    const { services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessment: otherBenefitsAssessment,
            internalOtherBenefitsRating} = props.selectedCompany.otherBenefitsProvided

    return (
        <div className='data-container'>
            <Paragraph className='target-data' text={[`Services: `, services]} />
            <Paragraph className='target-data' text={[`Products: `, products]} />
            <Paragraph className='target-data' text={[`People: `, people]} />
            <Paragraph className='target-data' text={[`Revenue Enhancements: `, revenueEnhancements]} />
            <Paragraph className='target-data' text={[`Miscellaneous: `, miscellaneous]} />
            <Paragraph className='target-data' text={[`Assessment of Other Benefits: `, otherBenefitsAssessment]} />
            <Paragraph className='target-data' text={[`Rating of Other Benefits: `, internalOtherBenefitsRating]} />
        </div>
    );
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(OtherBenefitsPage)
