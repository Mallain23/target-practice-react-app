import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';


import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/'
import { editFinances } from '../actions/EditTarget'

import Input from '../CompanyDataModal/Input'
import ReportSelect from './ReportSelect'

export class FinancialReportForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {

    const { selectedCompany } = this.props

     this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { name, report } = selectedFinancialReport


        const initValues = {
          name,
          report
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {

        this.props.dispatch(editFinances(values))

    };

    handleCancel() {
        this.props.dispatch(closeModal())
    };

    render() {

        return (
            <form className="financial-report-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="title">Title Of Report</label>
                <Field component={ReportSelect}
                        type="select"
                        name="title" />
                <label htmlFor="report">Financial Report Data</label>
                <Field component={Input}
                        placeholder="Enter Rating of Financial Concerns"
                        type="textarea"
                        name="report"
                        componentClass="textarea" />
                <button
                    type="submit"
                    disabled={this.props.submitting}>
                    Submit
                </button>
                <button
                    disabled={this.props.submitting}
                    onClick={this.handleCancel}>
                    Cancel
                </button>
            </form>
        );
    };
};

export default FinancialReportForm = reduxForm({
    form: 'financial-report-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('financial-data-form', Object.keys(errors)[0]))
})(FinancialReportForm);
