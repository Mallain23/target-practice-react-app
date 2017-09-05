import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'
import FormatIP from './FormatIP'

export class BenefitsPage extends React.Component {

    render() {
        const { patents,
                trademarks,
                copyrights,
                litigation,
                internalAssessmentOfIP,
                internalIPRating } = this.props.selectedCompany.intellectualProperty

        const { licenses,
                softwareUse,
                benefits,
                assessment: technologyAssessment,
                internalTechRating } = this.props.selectedCompany.technology

        const { services,
                products,
                people,
                revenueEnhancements,
                miscellaneous,
                assessment: otherBenefitsAssessment,
                internalOtherBenefitsRating} = this.props.selectedCompany.otherBenefitsProvided

        return (
            <Row>
                <Col xs={12}>
                      <h3>Intellectual Property Benefits</h3>
                      <FormatIP className='intellectual-property-list' type='Patents' arrayOfIP={patents} />
                      <FormatIP className='intellectual-property-list' type='Trademarks' arrayOfIP={trademarks} />
                      <FormatIP className='intellectual-property-list' type='Copyrights' arrayOfIP={copyrights} />
                      <Paragraph className='company-data' text={`Litigation or Issues Realting to IP: ${litigation}`} />
                      <Paragraph className='company-data' text={`Assessment of IP: ${internalAssessmentOfIP}`} />
                      <Paragraph className='company-data' text={`Rating: ${internalIPRating}`} />
                      <h3>Technology Benefits</h3>
                      <Paragraph className='company-data' text={`Licenses: ${licenses}`} />
                      <Paragraph className='company-data' text={`Software: ${softwareUse}`} />
                      <Paragraph className='company-data' text={`Assessment: ${technologyAssessment}`} />
                      <Paragraph className='company-data' text={`Rating: ${internalTechRating}`} />
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
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(BenefitsPage)
