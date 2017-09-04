import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import { showExtendedNav, fetchCompanyData } from '../actions'

import CompanyPageButtons from './CompanyPageButtons'
import CompanyOverview from './CompanyOverview'
import FinancialPage from './FinancialPage'

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

    render() {
        const { companyName } = this.props.selectedCompany
        const { selectedPage } = this.props
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
                      <FinancialPage {...this.props}/>
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
