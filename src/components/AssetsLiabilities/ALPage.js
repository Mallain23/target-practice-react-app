import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'
import FormattedAL from './FormattedAL'

import { calcTotalAssetValue, calcTotalLiabilityValue } from './utils'

export class ALPage extends React.Component {

    render() {

        const {
                assets,
                liabilities,
                totalValueOfAllAssets,
                totalLiabilities } = this.props.selectedCompany.financialMatters


        return (
                <Col xs={12}>
                    <FormattedAL className='asset-list'
                                 arrayOfAL={assets}
                                 name='Assets' />
                    <Paragraph className='company-data' text={`Total Value of All Assets: ${calcTotalAssetValue(assets)}`} />
                    <FormattedAL className='liability-list'
                                 arrayOfAL={liabilities}
                                 name='Liabilities' />
                    <Paragraph className='company-data' text={`Total Amount of All Liabilities: ${calcTotalLiabilityValue(liabilities)}`} />
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

export default connect(mapStateToProps)(ALPage)
