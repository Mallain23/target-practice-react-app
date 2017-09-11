import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'
import '../CompanyProfile/CompanyProfile.css'

export function LegalAssessment (props) {

    const { assessment,
            rating: _rating  } = props

    const rating = parseInt(_rating)

    return (
      <div className='data-container'>
          <Paragraph className='target-data' text={[`Assessment of Leagl Factors:  `, assessment]} />
          <Paragraph className='target-data' text={[`Rating of Legal Factors: `, rating]} />
      </div>
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
