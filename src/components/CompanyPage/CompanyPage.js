import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import { fetchTargetData } from '../actions';
import { getRelevantPage } from './utils';

import CompanyPageNav from './CompanyPageNav';
import CompanyPageButtons from './CompanyPageButtons';

import './CompanyPage.css';

export class CompanyPage extends React.Component {

    componentWillMount() {
        const companyName = this.props.match.params.companyName;
        const selectedCompany = this.props.selectedCompany;

        this.props.dispatch(fetchTargetData(companyName));
    };

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.match.params.companyName !== this.props.match.params.companyName) {

            const companyName = nextProps.match.params.companyName;

            this.props.dispatch(fetchTargetData(companyName));
        }
    };

    renderPageContent() {
        return this.props.childPage;
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

const mapStateToProps = (state, props) => {
    const { selectedCompany, selectedPage } = state.app;
    const newPropObj = Object.assign({}, props, {
          selectedPage,
          selectedCompany
    });

    const childPage = getRelevantPage(selectedPage, newPropObj);


    return {
        selectedCompany,
        selectedPage,
        childPage
    };
};

export default connect(mapStateToProps)(CompanyPage);
