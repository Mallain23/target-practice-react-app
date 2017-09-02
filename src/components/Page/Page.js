import React from 'react'
import { connect } from 'react-redux'

import OverviewPage from '../OverviewPage/OverviewPage'
import CompanyPage from '../CompanyPage/CompanyPage'

import './Page.css'

export class Page extends React.Component {

    render() {
        const { companySelected } = this.props

        const pageComponent = this.props.match.params.companyName ?  <CompanyPage /> : <OverviewPage />

        return (
            <div className='page-container'>
              {pageComponent}
           </div>
        );
    };
};

const mapStateToProps = state => ({
    companySelected: state.app.companySelected
})

export default connect(mapStateToProps)(Page)
