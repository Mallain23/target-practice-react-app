import React from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Row } from 'react-bootstrap'

import OverviewPage from '../OverviewPage/OverviewPage'
import CompanyPage from '../CompanyPage/CompanyPage'
import SideBarContainer from '../SideBar/SideBarContainer'

import './Page.css'

export class Page extends React.Component {
    renderCol() {
        const { showSidebar } = this.props
        return showSidebar ?   <Col xs={12} md={1}></Col> : ''
    }
    renderSize() {
      const { showSidebar } = this.props
      return showSidebar ? 11 : 12
    }

    render() {
        const { companySelected } = this.props
        const pageComponent = this.props.match.params.companyName ?  <CompanyPage {...this.props}/> : <OverviewPage />

        return (
          <div>
              <SideBarContainer />
              <Grid>
                  <Row>
                      {this.renderCol()}
                      <Col xs={12} md={this.renderSize()}>
                          <div className='page-container'>
                            {pageComponent}
                          </div>
                      </Col>
                  </Row>
               </Grid>
           </div>
        );
    };
};

const mapStateToProps = state => ({
    companySelected: state.app.companySelected,
    showSidebar: state.app.showSidebar
})

export default connect(mapStateToProps)(Page)
