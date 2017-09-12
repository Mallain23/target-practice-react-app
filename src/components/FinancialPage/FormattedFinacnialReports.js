import React from 'react';
import { connect } from 'react-redux';

import { getFinacnialReport } from '../actions';
import { openEditPageModal } from '../actions/ShowHideActions';
import { editFinancialReport } from '../actions/EditTarget';
import { sortFunction } from '../actions/utils';

import Paragraph from '../CompanyPage/Paragraph';
import './FinancialPage.css';

export class FormattedFinacnialReports extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    };

    handleClick(e) {
        e.preventDefault()

        const title = e.target.value;
        const typeOfReport = this.props.name;

        this.props.history.push(`/finacialreport/${title}/${typeOfReport}`);
    };

    handleEditClick(e) {
        e.preventDefault();

        const name = e.target.value;
        const typeOfReport = this.props.name;

        this.props.dispatch(getFinacnialReport(name, typeOfReport));
        this.props.dispatch(openEditPageModal());
    };

    render() {

        const arrayOfFinancialReports = this.props.arrayOfReports
        const typeOfReport = this.props.name
        const sortedReports = sortFunction(arrayOfFinancialReports, 'title')

        const formattedFinacnialReports = sortedReports.map(({title, report}, index) => {
            return (
                <li className='financial-statements-list-item' key={index}>
                    <button className='financial-report-button'
                               value={title}
                               onClick={this.handleClick} >
                               {title}
                    </button>
                    <span className='divider'> | </span>
                    <button className='financial-report-button' value={title} onClick={this.handleEditClick}>Edit Statement</button>
                </li>
            );
        });


        return (
          <div>
              <div className='section-header'>{typeOfReport} Financial Statements</div>
              <ul className={this.props.className}>
                  {formattedFinacnialReports}
              </ul>
          </div>
        );
    };
};

export default connect()(FormattedFinacnialReports)
