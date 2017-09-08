import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

import FormattedFinacnialReports from './FormattedFinacnialReports'
import ALPage from '../AssetsLiabilities/ALPage'
import FinancialOverview from './FinancialOverview'
import FinancialStatementsContainer from './FinancialStatementsContainer'

export class FinancialPage extends React.Component {

    renderComponent() {
        const { selectedPage } = this.props

        if (selectedPage === 'Assets and Liabilities') {
            return <ALPage {...this.props} />
        }

        else if (selectedPage === 'Financial Statements') {
            return <FinancialStatementsContainer {...this.props} />
        }

        return <FinancialOverview />
    };

    render() {

        return (
            <Row>
                {this.renderComponent()}
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
