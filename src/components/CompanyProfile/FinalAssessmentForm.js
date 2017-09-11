import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'

import { closeModal } from '../actions/ShowHideActions'
import { updateTarget } from '../actions/EditTarget'

import Input from '../AddCompanyModal/Input'
import StatusSelect from '../EditPageModal/StatusSelect'
import RatingSelect from '../EditPageModal/RatingSelect'

export class FinalAssessmentForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props

        this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { status, finalAssessment, overallRating} = selectedCompany
        const _overAllRating = parseInt(overallRating)

        const initValues = {
            status,
            finalAssessment,
            overallRating: _overAllRating
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        this.props.dispatch(updateTarget(values))
    };

    render() {
        const { status } = this.props.selectedCompany

        return (
            <Form className="edit-final-assessment-form"
                  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="finalAssessment">Final Assessment of Target</label>
                <Field component={Input}
                       placeholder='Enter Final Assessment Notes'
                       type="textarea"
                       componentClass='textarea'
                       name="finalAssessment" />
                <label htmlFor="rating">Final Rating of Company</label>
                <Field component={RatingSelect} name="overallRating" />
                <label htmlFor="status">Company Status</label>
                <Field
                    component={StatusSelect}
                    type="text"
                    placeholder={status}
                    name="status" />
                <button
                    type="submit"
                    disabled={this.props.submitting}>
                    Submit
                </button>
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

FinalAssessmentForm = connect(mapStateToProps)(FinalAssessmentForm)

export default FinalAssessmentForm = reduxForm({
    form: 'edit-final-assessment-form'})(FinalAssessmentForm);
