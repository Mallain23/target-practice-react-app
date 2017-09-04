import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from './Paragraph'
import FormattedAL from './FormattedAL'
import FormattedFinacnialReports from './FormattedFinacnialReports'

export class FinancialPage extends React.Component {
    render() {

        const { statementFromCompany,
                assets,
                liabilities,
                totalValueOfAllAssets,
                totalLiabilities,
                financialStatementsAnnual,
                financialStatementsQuarterly,
                financialStatementsMonthly,
                financesAudited,
                businessMargins,
                internalAssessmentOfFinances,
                internalFinancialRating } = this.props.selectedCompany.financialMatters


        return (
            <Row>
                <Col xs={12}>
                    <Paragraph className='company-data' text={`Company Statement of Current Finances: ${statementFromCompany}`} />
                    <FormattedAL className='asset-list'
                                 arrayOfAL={assets}
                                 name='Assets' />
                    <Paragraph className='company-data' text={`Total Value of All Assets: ${totalValueOfAllAssets}`} />
                    <FormattedAL className='liability-list'
                                 arrayOfAL={liabilities}
                                 name='Liabilities' />
                    <Paragraph className='company-data' text={`Total Value of All Liabilities: ${totalLiabilities}`} />
                    <FormattedFinacnialReports className='annual-financial-reports'
                                                arrayOfReports={financialStatementsAnnual}
                                                name='Annual'
                                                {...this.props} />
                    <FormattedFinacnialReports className='quarterly-financial-reports'
                                                arrayOfReports={financialStatementsQuarterly}
                                                name='Quarterly'
                                                {...this.props}  />
                    <FormattedFinacnialReports className='monthly-financial-reports'
                                                arrayOfReports={financialStatementsMonthly}
                                                name='Monthly'
                                                {...this.props} />


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
