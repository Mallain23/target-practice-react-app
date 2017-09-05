import React from 'react'

import Paragraph from '../CompanyPage/Paragraph'
import './FinancialPage.css'

export default class FormattedFinacnialReports extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };
    handleClick(e) {
        e.preventDefault()
        const title = e.target.value
        const typeOfReport = this.props.name


        this.props.history.push(`/finacialreport/${title}/${typeOfReport}`)
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
