import React from 'react';
import { connect } from 'react-redux';

import ALPage from '../AssetsLiabilities/ALPage';
import FinancialOverview from './FinancialOverview';
import FinancialStatementsContainer from './FinancialStatementsContainer';

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
            <div>
                {this.renderComponent()}
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

export default connect(mapStateToProps)(FinancialPage);
