import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'
import './CompanyProfile.css'

export class CompanyOverview extends React.Component {

    render() {

        const { companyName, costOfAcquisition } = this.props.selectedCompany
        const { yearFounded,
                location,
                numberOfEmployees,
                generalBusinessActivities,
                companyStrategy } = this.props.selectedCompany.companyProfile
        const { backgroundInformation, presentCondition } = this.props.selectedCompany.companyProfile.industryInformation

        return (
            <div className='data-container'>
                <Paragraph className='target-data' text={['Target Name:   ', companyName]} />
                <Paragraph className='target-data' text={['Cost of Aquisition:  ', costOfAcquisition]} />
                <Paragraph className='target-data' text={['Year Founded:  ', yearFounded]} />
                <Paragraph className='target-data' text={['Headquarters:  ', location.headQaurters]} />
                <Paragraph className='target-data' text={['Principle Place of Business:  ', location.principlePlaceOfBusiness]} />
                <Paragraph className='target-data' text={['Number of Offices:  ', location.numberOfOffices]} />
                <Paragraph className='target-data' text={['Number of Employees:  ', numberOfEmployees]} />
                <Paragraph className='target-data' text={['Description of Business Activities:  ', generalBusinessActivities]} />
                <Paragraph className='target-data' text={['Company Vision:  ', companyStrategy.vision]} />
                <Paragraph className='target-data' text={['Company Goals:  ', companyStrategy.goals]} />
                <Paragraph className='target-data' text={['Core Values:  ',  companyStrategy.coreValues]} />
                <Paragraph className='target-data' text={['Industry History:  ', backgroundInformation]} />
                <Paragraph className='target-data' text={['Present Industry Conditions:  ', presentCondition]} />
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(CompanyOverview)
