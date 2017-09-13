import React from 'react';
import { connect } from 'react-redux';

import FormattedFinacnialReports from './FormattedFinacnialReports';

import '../CompanyProfile/CompanyProfile.css';

export function FinancialStatementsContainer (props) {

    const { financialStatementsAnnual, financialStatementsQuarterly } = props.selectedCompany.financialMatters

    return (
        <div className='data-container'>
            <FormattedFinacnialReports
                className='annual-financial-reports'
                arrayOfReports={financialStatementsAnnual}
                name='Annual'
                {...props} />
            <FormattedFinacnialReports
                className='quarterly-financial-reports'
                arrayOfReports={financialStatementsQuarterly}
                name='Quarterly'
                {...props}  />
        </div>
    );
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app;

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(FinancialStatementsContainer);
