import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { updateTarget } from '../actions/EditTarget'
import { formatFinanceData } from './utils'

import Input from '../AddCompanyModal/Input'
import RatingSelect from '../EditPageModal/RatingSelect'

import '../EditPageModal/Modal.css'


export class EditFinancialForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props

        this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { statementFromCompany,
                internalFinancialRating,
                internalAssessmentOfFinances } = selectedCompany.financialMatters
        const { isAudited, whoAudits} = selectedCompany.financialMatters.financesAudited
        const { companyProjections, status, areProjectionsReasonable } = selectedCompany.financialMatters.businessMargins

        const _internalFinancialRating = parseInt(internalFinancialRating)

        const initValues = {
            status,
            statementFromCompany,
            companyProjections,
            areProjectionsReasonable,
            internalFinancialRating: _internalFinancialRating,
            internalAssessmentOfFinances,
            isAudited,
            whoAudits
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {

        const { selectedCompany } = this.props
        const formattedObj = formatFinanceData(values, selectedCompany)

        this.props.dispatch(updateTarget(formattedObj))

    };

    render() {
        const { status } = this.props.selectedCompany
        return (
            <Form className="financial-data-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <h2>Edit Financial Data</h2>
                <label htmlFor="statementFromCompany">Statement of Finances</label>
                <Field component={Input}
                       placeholder="Enter Target's Assessment of Finances"
                       type="textarea"
                       name="statementFromCompany"
                       componentClass="textarea" />
                 <label htmlFor="isAudited">Are Financial Statements Audited</label>
                 <Field component={Input}
                        placeholder="Enter Target's Assessment of Finances"
                        type="text"
                        name="isAudited" />
                  <label htmlFor="whoAudits">Who Audits Financial Statements (if applicable)</label>
                  <Field component={Input}
                         placeholder="If Applicable, Enter Information on who Audits the Finances"
                         type="text"
                         name="whoAudits" />
                <label htmlFor="status">Analysis of Current Business Margins</label>
                <Field component={Input}
                        placeholder="Enter Analysis of Target's Business Margins"
                        type="textarea"
                        name="status"
                        componentClass="textarea" />
                <label htmlFor="companyProjections">Targets Projected Business Margins</label>
                <Field component={Input}
                        placeholder="Enter Target's Projections for its Business Margins"
                        type="textarea"
                        name="companyProjections"
                        componentClass="textarea" />
                <label htmlFor="areProjectionsReasonable">Are the Target Projections Reasonable</label>
                <Field component={Input}
                        placeholder="Enter Analysis of the Target's Projections"
                        type="textarea"
                        name="companyProjections"
                        componentClass="textarea" />
                <label htmlFor="internalAssessmentOfFinances">Overall Assessment of Target Finances</label>
                <Field component={Input}
                        placeholder="Enter Final Assessment of Target's Finances"
                        type="textarea"
                        name="internalAssessmentOfFinances"
                        componentClass="textarea" />
                <label htmlFor="internalFinancialRating">Rating of Financial Concerns</label>
                <Field component={RatingSelect}
                        placeholder="Enter Rating of Financial Concerns"
                        name="internalFinancialRating"  />
                <Button
                    type="submit"
                    className='modal-button'
                    disabled={this.props.submitting}>
                    Submit
                </Button>
            </Form>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

EditFinancialForm = connect(mapStateToProps)(EditFinancialForm)

export default EditFinancialForm = reduxForm({
    form: 'financial-data-form'})(EditFinancialForm);
