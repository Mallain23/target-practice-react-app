import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'
import FormattedAL from './FormattedAL'
import FormattedFinacnialReports from './FormattedFinacnialReports'

export class FinancialPage extends React.Component {
    render() {
      
        const  { status, companyProjections, areProjectionsReasonable } = this.props.selectedCompany.financialMatters.businessMargins
        const { statementFromCompany,
                assets,
                liabilities,
                totalValueOfAllAssets,
                totalLiabilities,
                financialStatementsAnnual,
                financialStatementsQuarterly,
                financesAudited,
                internalAssessmentOfFinances,
                internalFinancialRating } = this.props.selectedCompany.financialMatters


        return (
            <Row>
                <Col xs={12}>
                    <Paragraph className='company-data' text={`Statement of Current Finances: ${statementFromCompany}`} />
                    <h3>Business Margins</h3>
                    <Paragraph className='company-data' text={`Current Status of Business Margins: ${status}`} />
                    <Paragraph className='company-data' text={`Company Projections for Business Margins: ${companyProjections}`} />
                    <Paragraph className='company-data' text={`Are Projections Reasonable: ${areProjectionsReasonable}`} />
                    <h3>Financial Reports</h3>
                    <Paragraph className='company-data' text={`Financial Reports Audited: ${financesAudited.isAudited}`} />
                    <Paragraph className='company-data' text={`Who audits Finances: ${financesAudited.whoAudits}`} />
                    <FormattedFinacnialReports className='annual-financial-reports'
                                                arrayOfReports={financialStatementsAnnual}
                                                name='Annual'
                                                {...this.props} />
                    <FormattedFinacnialReports className='quarterly-financial-reports'
                                                arrayOfReports={financialStatementsQuarterly}
                                                name='Quarterly'
                                                {...this.props}  />
                    <FormattedAL className='asset-list'
                                 arrayOfAL={assets}
                                 name='Assets' />
                    <Paragraph className='company-data' text={`Total Value of All Assets: ${totalValueOfAllAssets}`} />
                    <FormattedAL className='liability-list'
                                 arrayOfAL={liabilities}
                                 name='Liabilities' />
                    <Paragraph className='company-data' text={`Total Value of All Liabilities: ${totalLiabilities}`} />
                    <h3>Final Assessment and Rating of Finances</h3>
                    <Paragraph className='company-data' text={`Internal Assessment: ${internalAssessmentOfFinances}`} />
                    <Paragraph className='company-data' text={`Rating of Finances: ${internalFinancialRating}`} />
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

export default connect(mapStateToProps)(FinancialPage)
