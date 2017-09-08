import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import { fetchCompanyData } from '../actions'
import { showExtendedNav } from '../actions/ShowHideActions'

import CompanyPageNav from './CompanyPageNav'
import CompanyPageButtons from './CompanyPageButtons'
import CompanyOverview from '../CompanyProfile/CompanyOverview'
import FinancialPage from '../FinancialPage/FinancialPage'
import IntellectualPropertyPage from '../BenefitsPage/IntellectualPropertyPage'
import TechnologyPage from '../BenefitsPage/TechnologyPage'
import OtherBenefitsPage from '../BenefitsPage/OtherBenefitsPage'
import LegalPage from '../Legal/LegalPage'
import CompanyDirectory from '../CompanyProfile/CompanyDirectory'
import FinalAssessmentPage from '../CompanyProfile/FinalAssessmentPage'

import './CompanyPage.css'

export class CompanyPage extends React.Component {

    componentWillMount() {
        const companyName = this.props.match.params.companyName;
        const selectedCompany = this.props.selectedCompany

        if (selectedCompany.companyName === companyName) {
          return
        }

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

          if (selectedPage === 'Company Overview') {
              return <CompanyOverview {...this.props} />
          }

          else if (selectedPage === 'Company Directory') {
              return <CompanyDirectory {...this.props} />
          }

          else if (selectedPage === 'Final Assessment') {
              return <FinalAssessmentPage {...this.props} />
          }

          else if (selectedPage === 'Financial Page' ||
                  selectedPage === 'Assets and Liabilities' ||
                  selectedPage === 'Financial Statements') {

              return <FinancialPage {...this.props} />
          }

          else if (selectedPage === 'Intellectual Property') {
              return <IntellectualPropertyPage {...this.props} />
          }

          else if (selectedPage === 'Technology') {
              return <TechnologyPage {...this.props} />
          }

          else if (selectedPage === 'Other Benefits') {
              return <OtherBenefitsPage {...this.props} />
          }

          return <LegalPage {...this.props} />
    };

    render() {
        const { selectedPage } = this.props
        const { companyName } = this.props.selectedCompany
        console.log(companyName)

        return (
              <div>
                  <Row >
                      <Col xs={12}>
                        <div className='header'>
                          <CompanyPageNav />
                        </div>

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
