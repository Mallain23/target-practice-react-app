import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import { showExtendedNav, fetchCompanyData } from '../actions'

import CompanyPageButtons from './CompanyPageButtons'
import CompanyOverview from '../CompanyOverview/CompanyOverview'
import FinancialPage from '../FinancialPage/FinancialPage'
import BenefitsPage from '../BenefitsPage/BenefitsPage'
import LegalPage from '../LegalPage/LegalPage'
import CompanyDirectory from '../CompanyOverview/CompanyDirectory'
import FinalAssessmentPage from '../CompanyOverview/FinalAssessmentPage'

export class CompanyPage extends React.Component {

    componentWillMount() {
        const companyName = this.props.match.params.companyName;

        this.props.dispatch(fetchCompanyData(companyName));
    };

    componentDidMount() {
        this.props.dispatch(showExtendedNav());
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.match.params.companyName !== this.props.match.params.companyName) {

            const companyName = nextProps.match.params.companyName

            this.props.dispatch(fetchCompanyData(companyName))
        }
    };

    renderPageContent() {
          const { selectedPage } = this.props

          if (selectedPage === 'CompanyOverview') {
              return <CompanyOverview {...this.props} />
          }

          else if (selectedPage === 'CompanyDirectory') {
              return <CompanyDirectory {...this.props} />
          }

          else if (selectedPage === 'FinalAssessmentPage') {
              return <FinalAssessmentPage {...this.props} />
          }

          else if (selectedPage === 'FinancialPage') {
              return <FinancialPage {...this.props} />
          }

          else if (selectedPage === 'BenefitsPage') {
              return <BenefitsPage {...this.props} />
          }

          return <LegalPage {...this.props} />
    };

    render() {
        const { companyName, selectedPage } = this.props
        return (
              <div>
                  <Row className='company-page-container'>
                      <Col xs={12}>
                          <h1 className='company-page-header'>{companyName}</h1>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12} >
                          <h3 className='page-name'>{selectedPage}</h3>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12}>
                          <CompanyPageButtons {...this.props}/>
                      </Col>
                      {this.renderPageContent()}
                  </Row>
              </div>

        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany, selectedPage } = state.app

    return {
        selectedCompany,
        selectedPage
    };
};

export default connect(mapStateToProps)(CompanyPage)
