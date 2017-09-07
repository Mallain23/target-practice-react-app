import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';


import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/'
import { updateTarget } from '../actions/EditTarget'

import Input from '../CompanyDataModal/Input'
import StatusSelect from '../EditPageModal/StatusSelect'

export class FinalAssessmentForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {

    const { selectedCompany } = this.props

     this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { finalAssessment, overallRating } = selectedCompany
        const _overAllRating = parseInt(overallRating)

        const initValues = {
            finalAssessment,
            overallRating: _overAllRating
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        this.props.dispatch(updateTarget(values))
    };

    handleCancel() {
        this.props.dispatch(closeModal())
    };

    render() {
        const { status } = this.props.selectedCompany

        return (
            <form className="edit-final-assessment-form"
                  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="finalAssessment">Final Assessment of Target</label>
                <Field component={Input}
                       placeholder='Enter Final Assessment Notes'
                      type="text"
                      componentClass='textarea'
                      name="finalAssessment" />
                <label htmlFor="rating">Final Rating of Company</label>
                <Field component={Input}
                      type="number" name="overallRating" validate={[validValue]} />
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
                <button
                    disabled={this.props.submitting}
                    onClick={this.handleCancel}>
                    Cancel
                </button>
            </form>
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
    form: 'edit-final-assessment-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-final-assessment-form', Object.keys(errors)[0]))
})(FinalAssessmentForm);
