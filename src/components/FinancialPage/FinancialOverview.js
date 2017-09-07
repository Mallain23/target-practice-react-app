import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'


export class FinancialOverview extends React.Component {

    render() {

        const  { status ,
                companyProjections,
                areProjectionsReasonable } = this.props.selectedCompany.financialMatters.businessMargins
        const { statementFromCompany,
                financesAudited,
                internalAssessmentOfFinances,
                internalFinancialRating  } = this.props.selectedCompany.financialMatters

        return (
                <Col xs={12}>
                    <Paragraph className='company-data' text={`Statement of Current Finances: ${statementFromCompany}`} />
                    <Paragraph className='company-data' text={`Financial Reports Audited: ${financesAudited.isAudited}`} />
                    <Paragraph className='company-data' text={`Who audits Finances: ${financesAudited.whoAudits}`} />
                    <h3>Business Margins</h3>
                    <Paragraph className='company-data' text={`Current Status of Business Margins: ${status}`} />
                    <Paragraph className='company-data' text={`Company Projections for Business Margins: ${companyProjections}`} />
                    <Paragraph className='company-data' text={`Are Projections Reasonable: ${areProjectionsReasonable}`} />
                    <h3>Final Assessment and Rating of Finances</h3>
                    <Paragraph className='company-data' text={`Internal Assessment: ${internalAssessmentOfFinances}`} />
                    <Paragraph className='company-data' text={`Rating of Finances: ${internalFinancialRating}`} />
                </Col>
        );
    };
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(FinancialOverview)
