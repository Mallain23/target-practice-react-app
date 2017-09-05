import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import OverviewPage from '../OverviewPage/OverviewPage'
import CompanyPage from '../CompanyPage/CompanyPage'

import './Page.css'

export class Page extends React.Component {

    render() {
        const { companySelected } = this.props

        const pageComponent = this.props.match.params.companyName ?  <CompanyPage {...this.props}/> : <OverviewPage />

        return (
          <Grid>
              <Row>
                  <Col xs={3}>
                  </Col>
                  <Col xs={9}>
                      <div className='page-container'>
                        {pageComponent}
                      </div>
                  </Col>
              </Row>
           </Grid>
        );
    };
};

const mapStateToProps = state => ({
    companySelected: state.app.companySelected
})

export default connect(mapStateToProps)(Page)
