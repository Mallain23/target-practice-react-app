import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { getFinacnialReport } from '../actions'


export class FullFinancialReport extends React.Component {
    constructor (props) {
        super(props)

      this.handleEditClick = this.handleEditClick.bind(this)
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
    };

    componentWillMount() {

        const title = this.props.match.params.title
        const typeOfReport = this.props.match.params.typeOfReport
        this.props.dispatch(getFinacnialReport(title, typeOfReport))
    }

    handleEditClick(e) {
        e.preventDefault()
        const { selectedFinancialReport } = this.props
        this.props.dispatch(editFinancialReport(selectedFinancialReport))
    };

    handleDeleteClick(e) {
        e.preventDefault()
    };

    render() {

        const { selectedCompany, selectedFinancialReport } = this.props

        return (
          <Row>
              <Col xs={12} md={3}>
              </Col>
              <Col xs={12} md={9}>
                  <h1>{selectedFinancialReport.title}</h1>
                      <Button value={title} onClick={this.handleEditClick}>Edit Report</Button>
                      <Button value={title} onClick={this.handleDeleteClick}>Delete Report</Button>
                  <p>{selectedFinancialReport.Report}</p>
                  <Link to={`/company/${selectedCompany.companyName}`}>Back </Link>
              </Col>
          </Row>
        );
    };
};

export const mapStateToProps = state => {
    const { selectedFinancialReport, selectedCompany } = state.app

    return {
        selectedFinancialReport: selectedFinancialReport || '',
        selectedCompany
    };
};

export default connect(mapStateToProps)(FullFinancialReport)
