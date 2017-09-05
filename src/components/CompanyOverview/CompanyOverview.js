import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export class CompanyOverview extends React.Component {

    render() {
        const { companyName, costOfAcquisition } = this.props.selectedCompany
        const { yearFounded,
                location,
                numberOfEmployees,
                generalBusinessActivities,
                companyStrategy,
                industryInformation } = this.props.selectedCompany.companyProfile

        return (
              <Row>
                  <Col xs={12}>
                      <Paragraph className='company-data' text={`CompanyName: ${companyName}`} />
                      <Paragraph className='company-data' text={`Cost of Aquisition: ${costOfAcquisition}`} />
                      <Paragraph className='company-data' text={`Year Founded: ${yearFounded}`} />
                      <Paragraph className='company-data' text={`Headquarters: ${location.headQaurters}`} />
                      <Paragraph className='company-data' text={`Principle Place of Business: ${location.principlePlaceOfBusiness}`} />
                      <Paragraph className='company-data' text={`Number of Offices: ${location.numberOfOffices}`} />
                      <Paragraph className='company-data' text={`Number of Employees: ${numberOfEmployees}`} />
                      <Paragraph className='company-data' text={`Description of Business Activities: ${generalBusinessActivities}`} />
                      <Paragraph className='company-data' text={`Company Vision ${companyStrategy.vision}`} />
                      <Paragraph className='company-data' text={`Company Goals: ${companyStrategy.goals}`} />
                      <Paragraph className='company-data' text={`Core Values: ${companyStrategy.coreValues}`} />
                      <Paragraph className='company-data' text={`Background/History of the Industry: ${industryInformation.background}`} />
                      <Paragraph className='company-data' text={`Present Industry Conditions: ${industryInformation.background}`} />
                  </Col>
              </Row>
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
