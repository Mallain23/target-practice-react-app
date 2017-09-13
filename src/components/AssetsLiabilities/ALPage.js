import React from 'react';
import { connect } from 'react-redux';

import Paragraph from '../CompanyPage/Paragraph';
import FormattedAL from './FormattedAL';

import { calcTotalAssetValue, calcTotalLiabilityValue } from './utils';

import '../CompanyProfile/CompanyProfile.css';


export function ALPage (props){

    const {
            assets,
            liabilities,
            totalValueOfAllAssets,
            totalLiabilities
          } = props.selectedCompany.financialMatters;

    const totalAssetValue = calcTotalAssetValue(assets);
    const totalLiabilityValue =  calcTotalLiabilityValue(liabilities);

    return (
            <div className='data-container'>
                <FormattedAL className='asset-list'
                             typeOfProperty='Assets'
                             arrayOfAL={assets}
                             name='Assets' />
                <Paragraph className='target-data' text={[`Total Value of All Assets:  `, totalAssetValue]} />
                <FormattedAL className='liability-list'
                             typeOfProperty='Liabilities'
                             arrayOfAL={liabilities}
                             name='Liabilities' />
                <Paragraph className='target-data' text={[`Total Amount of All Liabilities:  `, totalLiabilityValue]} />
            </div>
    );
};

export const mapStateToProps = state => {
  const { selectedCompany } = state.app

  return {
      selectedCompany
  };
};

export default connect(mapStateToProps)(ALPage)
