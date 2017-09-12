import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { updateTarget} from '../actions/EditTarget';
import { formatFinanceStatements } from './utils';
import Input from '../AddCompanyModal/Input';


export class FinancialReportForm extends React.Component {

    componentDidMount() {
        const { selectedFinancialReport } = this.props

        this.handleInitialize(selectedFinancialReport)

    };

    handleInitialize(selectedFinancialReport) {

        const { Report } = selectedFinancialReport;

        const initValues = {
          Report
        };

        this.props.initialize(initValues);
    };

    onSubmit(values) {
        const { selectedFinancialReport, selectedCompany } = this.props;
        values.title = selectedFinancialReport.title;

        values.type = values.title.includes('Annual') ? 'financialStatementsAnnual' : 'financialStatementsQuarterly';

        const formattedObj = formatFinanceStatements(values, selectedFinancialReport, selectedCompany);

        this.props.dispatch(updateTarget(formattedObj));
    };


    render() {
        const { title } = this.props.selectedFinancialReport

        return (
            <Form className="financial-report-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <h2>{title}</h2>
                <label htmlFor="Report">Financial Statement Data</label>
                <Field component={Input}
                        placeholder="Enter Report Data"
                        type="textarea"
                        name="Report"
                        componentClass="textarea" />
                <Button
                    type="submit"
                    disabled={this.props.submitting}>
                    Edit
                </Button>
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
