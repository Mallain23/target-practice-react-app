import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'

import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/ShowHideActions'
import { updateTarget} from '../actions/EditTarget'
import { formatFinanceStatements } from './utils'
import Input from '../AddCompanyModal/Input'


export class FinancialReportForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {

        if (this.props.editReport) {
            const { selectedFinancialReport } = this.props
            this.handleInitialize(selectedFinancialReport)
        }
    };

    handleInitialize(selectedFinancialReport) {

        const { Report } = selectedFinancialReport


        const initValues = {
          Report
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const { selectedFinancialReport, selectedCompany } = this.props
        values.title = selectedFinancialReport.title
        values.type = values.title.includes('Annual') ? 'financialStatementsAnnual' : 'financialStatementsQuarterly'

        const formattedObj = formatFinanceStatements(values, selectedFinancialReport, selectedCompany)

        this.props.dispatch(updateTarget(formattedObj))
    };

    handleCancel() {
        this.props.dispatch(closeModal())

    };

    render() {
        const { title } = this.props.selectedFinancialReport
        return (
            <Form className="financial-report-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <h2>{title}</h2>
                <label htmlFor="Report">Financial Report Data</label>
                <Field component={Input}
                        placeholder="Enter Report Data"
                        type="textarea"
                        name="Report"
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
            </Form>
        );
    };
};

const mapStateToProps = state => {
    const { selectedFinancialReport, selectedCompany } = state.app

    return {
        selectedFinancialReport,
        selectedCompany
    };
};

FinancialReportForm= connect(mapStateToProps)(FinancialReportForm)

export default FinancialReportForm = reduxForm({
    form: 'financial-report-form'})(FinancialReportForm);
