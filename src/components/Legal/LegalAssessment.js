import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export function LegalAssessment (props) {

    const { assessment,
            rating: _rating  } = props

    const rating = parseInt(_rating)

    return (
      <Col xs={12}>
          <h3>Assessment and Rating of Legal Considerations</h3>
          <Paragraph className='company-data' text={`Assessment: ${assessment}`} />
          <Paragraph className='company-data' text={`Rating: ${rating}`} />
      </Col>
    );
};

const mapStateToProps = state => {
    console.log(state)
    const { assessment,
            rating  } = state.app.selectedCompany.legal

    return {
      assessment,
      rating
    };
};

export default connect(mapStateToProps)(LegalAssessment)
