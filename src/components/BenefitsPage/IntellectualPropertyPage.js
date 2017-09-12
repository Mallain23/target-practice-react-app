import React from 'react';
import { connect } from 'react-redux';

import Paragraph from '../CompanyPage/Paragraph';

import '../CompanyProfile/CompanyProfile.css';

export function IntellectualPropertyPage (props) {

    const { patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating } = props.selectedCompany.intellectualProperty;

    return (
          <div className='data-container'>
            <Paragraph className='target-data' text={[`Patents held by the Target:  `, patents]} />
            <Paragraph className='target-data' text={[`Trademarks held by the Target:  `, trademarks]} />
            <Paragraph className='target-data' text={[`Copyrights held by the Target:  `, copyrights]} />
            <Paragraph className='target-data' text={[`Negative Impacts or Concerns from IP:  `, negative]} />
            <Paragraph className='target-data' text={[`Assessment of IP:  `, internalAssessmentOfIP]} />
            <Paragraph className='target-data' text={[`Rating of IP:  `, internalIPRating]} />
          </div>
    );
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app;

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(IntellectualPropertyPage);
