import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import { fetchTargetData } from '../actions';

import CompanyPageNav from './CompanyPageNav';
import CompanyPageButtons from './CompanyPageButtons';
import CompanyOverview from '../CompanyProfile/CompanyOverview';
import FinancialPage from '../FinancialPage/FinancialPage';
import IntellectualPropertyPage from '../BenefitsPage/IntellectualPropertyPage';
import TechnologyPage from '../BenefitsPage/TechnologyPage';
import OtherBenefitsPage from '../BenefitsPage/OtherBenefitsPage';
import LegalPage from '../Legal/LegalPage';
import CompanyDirectory from '../CompanyProfile/CompanyDirectory';
import FinalAssessmentPage from '../CompanyProfile/FinalAssessmentPage';

import './CompanyPage.css';

export class CompanyPage extends React.Component {

    componentWillMount() {
        const companyName = this.props.match.params.companyName;
        const selectedCompany = this.props.selectedCompany;

        if (selectedCompany.companyName === companyName) {
          return
        }

        this.props.dispatch(fetchTargetData(companyName));
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.match.params.companyName !== this.props.match.params.companyName) {

            const companyName = nextProps.match.params.companyName;

            this.props.dispatch(fetchTargetData(companyName));
        }
    };

    renderPageContent() {
          const { selectedPage } = this.props

          if (selectedPage === 'Target Profile') {
              return <CompanyOverview {...this.props} />
          }

          else if (selectedPage === 'Target Directory') {
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
        const { selectedPage } = this.props;

        return (
              <div className='page-container'>
                  <Row >
                      <Col xs={12} md={1}></Col>
                      <Col xs={12} md={11}>
                        <div className='header'>
                          <CompanyPageNav {...this.props} />
                        </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12} md={1}></Col>
                      <Col xs={12} md={11}>
                          <div className='page-name-container'>
                              <h3 className='page-name'>{selectedPage}</h3>
                               <CompanyPageButtons {...this.props}/>
                          </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={12} md={1}></Col>
                      <Col xs={12} md={10}>
                     {this.renderPageContent()}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={11}>
                      <div className='footer'></div>
                    </Col>
                </Row>
              </div>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany, selectedPage } = state.app;

    return {
        selectedCompany,
        selectedPage
    };
};

export default connect(mapStateToProps)(CompanyPage);
