import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import OverviewPage from '../OverviewPage/OverviewPage'
import CompanyPage from '../CompanyPage/CompanyPage'
import SideBarContainer from '../SideBar/SideBarContainer'

export class Page extends React.Component {

    renderSize() {
      const { showSidebar } = this.props;
      return showSidebar ? 11 : 12
    };

    render(){
        const pageComponent = this.props.match.params.companyName ?  <CompanyPage {...this.props}/> : <OverviewPage />

        return (
            <Grid>
                <Row>
                    <SideBarContainer />
                    <Col xs={12}  lg={this.renderSize()}>
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
    companySelected: state.app.companySelected,
    showSidebar: state.app.showSidebar
});

export default connect(mapStateToProps)(Page)
