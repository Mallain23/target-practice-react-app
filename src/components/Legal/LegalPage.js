import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import LegalFactors from './LegalFactors'
import LegalAssessment from './LegalAssessment'

import Paragraph from '../CompanyPage/Paragraph'

export class LegalPage extends React.Component {
    renderComponent() {
        const { selectedPage } = this.props

        if (selectedPage === 'Legal Page') {
            return <LegalFactors />
        }

        return <LegalAssessment />
    };

    render() {
        return (
            <Row>
                <Col xs={12}>
                    {this.renderComponent()}
                  </Col>
            </Row>
        );
    };
};

export const mapStateToProps = state => {

    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(LegalPage)
