import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

import '../CompanyProfile/CompanyProfile.css'
import './FinancialPage.css'

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
            <div className='data-container'>
                <span className='section-header'>Financial Factors</span>
                <div className='section'>
                    <Paragraph className='target-data' text={[`Statement of Current Finances:  `, statementFromCompany]} />
                    <Paragraph className='target-data' text={[`Are the Financial Reports Audited:  `, financesAudited.isAudited]} />
                    <Paragraph className='target-data' text={[`Who audits Finances:  `, financesAudited.whoAudits]} />
                    <Paragraph className='target-data' text={[`Current Status of Business Margins:  `, status]} />
                    <Paragraph className='target-data' text={[`Company Projections for Business Margins:  `, companyProjections]} />
                    <Paragraph className='target-data' text={[`Are Projections Reasonable:  `, areProjectionsReasonable]} />
                </div>
                <span className='section-header'>Final Assessment and Rating of Finances</span>
                <div className='section'>
                    <Paragraph className='target-data' text={[`Assessment of Finances:  `, internalAssessmentOfFinances]} />
                    <Paragraph className='target-data' text={[`Rating of Finances:  `, internalFinancialRating]} />
                </div>
            </div>
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
