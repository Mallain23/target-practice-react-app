import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

import FormattedFinacnialReports from './FormattedFinacnialReports'


export class FinancialStatementsContainer extends React.Component {

    render() {

        const { financialStatementsAnnual, financialStatementsQuarterly } = this.props.selectedCompany.financialMatters

        return (
            <Col xs={12}>
                <h3>Financial Reports</h3>
                    <FormattedFinacnialReports className='annual-financial-reports'
                                                arrayOfReports={financialStatementsAnnual}
                                                name='Annual'
                                                {...this.props} />
                    <FormattedFinacnialReports className='quarterly-financial-reports'
                                                arrayOfReports={financialStatementsQuarterly}
                                                name='Quarterly'
                                                {...this.props}  />
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

export default connect(mapStateToProps)(FinancialStatementsContainer)
