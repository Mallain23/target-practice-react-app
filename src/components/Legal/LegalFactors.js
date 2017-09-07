import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

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
        <Col xs={12}>
            <h3>Legal Considerations</h3>
              <Paragraph className='company-data' text={`Future Litigation: ${futureLitgiation}`} />
              <Paragraph className='company-data' text={`Current Litigation: ${currentLitigation}`} />
              <Paragraph className='company-data' text={`Past Litigation:  ${otherLitigation}`} />
              <Paragraph className='company-data' text={`Threatened Litigation: ${threatened}`} />
              <Paragraph className='company-data' text={`Review of Contracts: ${reviewofContracts}`} />
              <Paragraph className='company-data' text={`Settlements: ${settlement}`} />
              <Paragraph className='company-data' text={`Arbitration ${arbitration}`} />
              <Paragraph className='company-data' text={`Other Regulatory Concerns: ${otherRegulatory}`} />
              <Paragraph className='company-data' text={`Internal Issues: ${internalIssues}`} />
          </Col>
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
