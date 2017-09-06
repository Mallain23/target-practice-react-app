import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { editFinancialReport } from '../actions/EditTarget'

import Paragraph from '../CompanyPage/Paragraph'
import './FinancialPage.css'

export class FormattedFinacnialReports extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    };
    handleClick(e) {
        e.preventDefault()
        const title = e.target.value
        const typeOfReport = this.props.name


        this.props.history.push(`/finacialreport/${title}/${typeOfReport}`)
    };

    handleEditClick(e) {
        e.preventDefault()

        const name = e.target.value
        this.props.dispatch(editFinancialReport(name))
    };

    handleDeleteClick(e) {
        e.preventDefault()
    };

    render() {

        const arrayOfFinancialReports = this.props.arrayOfReports
        const typeOfReport = this.props.name
        let formattedFinacnialReports

        if (arrayOfFinancialReports.length < 1) {
            formattedFinacnialReports = 'No Reports have been uploaded'
        }

        else {
            formattedFinacnialReports = arrayOfFinancialReports.map(({title, report}, index) => {
                  return (
                      <li key={index}>
                          <button className='financial-report-button'
                                     value={title}
                                     onClick={this.handleClick} >
                                     {title}
                          </button>
                          <Button value={title} onClick={this.handleEditClick}>Edit Report</Button>
                          <Button value={title} onClick={this.handleDeleteClick}>Delete Report</Button>
                      </li>
                  );
              });
        }

        return (
          <div>
              <h3>{typeOfReport} Financial Reports</h3>
              <ul className={this.props.className}>
                  {formattedFinacnialReports}
              </ul>
          </div>
        );
    };
};

export default connect()(FormattedFinacnialReports)
