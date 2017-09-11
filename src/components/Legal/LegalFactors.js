import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

import '../CompanyProfile/CompanyProfile.css'

export function LegalFactors (props) {
    const { futureLitgiation,
            currentLitigation,
            otherLitigation,
            internalIssues,
            reviewofContracts,
            threatened,
            settlement,
            arbitration,
            otherRegulatory } = props

    return (
        <div className='data-container'>
              <Paragraph className='target-data' text={[`Future Litigation:  `, futureLitgiation]} />
              <Paragraph className='target-data' text={[`Current Litigation:  `, currentLitigation]} />
              <Paragraph className='target-data' text={[`Past Litigation:  `, otherLitigation]} />
              <Paragraph className='target-data' text={[`Threatened Litigation: `, threatened]} />
              <Paragraph className='target-data' text={[`Review of Contracts:  `, reviewofContracts]} />
              <Paragraph className='target-data' text={[`Settlements:  `, settlement]} />
              <Paragraph className='target-data' text={[`Arbitration  `, arbitration]} />
              <Paragraph className='target-data' text={[`Other Regulatory Concerns:  `, otherRegulatory]} />
              <Paragraph className='target-data' text={[`Internal Issues:  `, internalIssues]} />
          </div>
    );
};

const mapStateToProps = state => {
    const { futureLitgiation,
            currentLitigation,
            otherLitigation,
            internalIssues,
            reviewofContracts,
            threatened,
            settlement,
            arbitration,
            otherRegulatory } = state.app.selectedCompany.legal

    return {
             futureLitgiation,
              currentLitigation,
              internalIssues,
              otherLitigation,
              reviewofContracts,
              threatened,
              settlement,
              arbitration,
              otherRegulatory
    };
};

export default connect(mapStateToProps)(LegalFactors)
