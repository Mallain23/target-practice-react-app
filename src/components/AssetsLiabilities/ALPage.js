import React from 'react'
import { connect } from 'react-redux'

import Paragraph from '../CompanyPage/Paragraph'
import FormattedAL from './FormattedAL'

import { calcTotalAssetValue, calcTotalLiabilityValue } from './utils'

import '../CompanyProfile/CompanyProfile.css'


export function ALPage (props){

    const {
            assets,
            liabilities,
            totalValueOfAllAssets,
            totalLiabilities } = props.selectedCompany.financialMatters


    return (
            <div className='data-container'>
                <FormattedAL className='asset-list'
                             arrayOfAL={assets}
                             name='Assets' />
                <Paragraph className='target-data' text={[`Total Value of All Assets:  `, calcTotalAssetValue(assets)]} />
                <FormattedAL className='liability-list'
                             arrayOfAL={liabilities}
                             name='Liabilities' />
                <Paragraph className='target-data' text={[`Total Amount of All Liabilities:  `, calcTotalLiabilityValue(liabilities)]} />
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
