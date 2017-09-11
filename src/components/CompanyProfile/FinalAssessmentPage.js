import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'


export class FinalAssessmentPage extends React.Component {
    render() {
        const { finalAssessment, overallRating, status } = this.props.selectedCompany

        return (
            <div className='data-container'>
                <Paragraph className='target-data' text={['Final Assessment:  ', finalAssessment]} />
                <Paragraph className='target-data' text={['Overall Rating:  ', overallRating]} />
                <Paragraph className='target-data' text={['Status: ', status]} />
           </div>
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
