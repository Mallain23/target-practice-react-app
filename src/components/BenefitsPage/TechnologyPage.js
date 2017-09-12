import React from 'react';
import { connect } from 'react-redux';

import Paragraph from '../CompanyPage/Paragraph';

import '../CompanyProfile/CompanyProfile.css';

export function TechnologyPage (props) {
    const { licenses,
            softwareUse,
            assessment: technologyAssessment,
            internalTechRating } = props.selectedCompany.technology;

    return (
        <div className='data-container'>
                  <Paragraph className='target-data' text={[`Licenses: `, licenses]} />
                  <Paragraph className='target-data' text={[`Software: `, softwareUse]} />
                  <Paragraph className='target-data' text={[`Assessment of Technology: `, technologyAssessment]} />
                  <Paragraph className='target-data' text={[`Rating of Technology: `, internalTechRating]} />
        </div>
    );
};

export const mapStateToProps = state => {
    const { selectedCompany } = state.app;

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(TechnologyPage);
