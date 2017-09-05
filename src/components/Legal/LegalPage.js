import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export class LegalPage extends React.Component {

    render() {
        const { futureLitgiation,
                currentLitigation,
                otherLitigation,
                reviewofContracts,
                threatened,
                settlement,
                arbitration,
                otherRegulatory,
                assessment,
                rating } = this.props.selectedCompany.legal

        return (
          <Row>
              <Col xs={12}>
                    <h3>Legal Considerations</h3>
                      <Paragraph className='company-data' text={`Future Litigation: ${futureLitgiation}`} />
                      <Paragraph className='company-data' text={`Current Litigation: ${currentLitigation}`} />
                      <Paragraph className='company-data' text={`Past Litigation:  ${otherLitigation}`} />
                      <Paragraph className='company-data' text={`Threatened Litigation: ${litigation}`} />
                      <Paragraph className='company-data' text={`Review of Contracts: ${reviewofContracts}`} />
                      <Paragraph className='company-data' text={`Settlements: ${settlement}`} />
                      <Paragraph className='company-data' text={`Arbitration ${arbitration}`} />
                      <Paragraph className='company-data' text={`Other Regulatory Concerns: ${otherRegulatory}`} />
                      <Paragraph className='company-data' text={`Internal Issues: ${internalIssues}`} />
                      <Paragraph className='company-data' text={`Assessment: ${assessment}`} />
                      <Paragraph className='company-data' text={`Rating: ${rating}`} />
                  </Col>
              </Row>


        );
    };
};

export const mapStateToProps = state = {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(LegalPage)
