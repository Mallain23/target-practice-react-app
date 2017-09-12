import React from 'react';
import { connect } from 'react-redux';

import Paragraph from '../CompanyPage/Paragraph';


export function FinalAssessmentPage (props){

    const { finalAssessment, overallRating, status } = props.selectedCompany;

    return (
        <div className='data-container'>
            <Paragraph className='target-data' text={['Final Assessment:  ', finalAssessment]} />
            <Paragraph className='target-data' text={['Overall Rating:  ', overallRating]} />
            <Paragraph className='target-data' text={['Status: ', status]} />
       </div>
   );
};

const mapStateToProps = state => {
    const { selectedCompany, status } = state.app

    return {
        selectedCompany,
        status
    };
};

export default connect(mapStateToProps)(FinalAssessmentPage)
