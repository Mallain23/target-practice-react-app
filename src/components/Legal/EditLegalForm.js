import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';

import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions'
import { updateTarget } from '../actions/EditTarget'

import Input from '../CompanyDataModal/Input'

export class EditLegalForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {

    const { selectedCompany } = this.props

     this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { futureLitgiation,
                currentLitigation,
                otherLitigation,
                threatened,
                reviewofContracts,
                otherRegulatory,
                settlement,
                arbitration,
                internalIssues,
                assessment,
                rating: _rating } = selectedCompany.legal

        const rating = parseInt(_rating)

        const initValues = {
            futureLitgiation,
            currentLitigation,
            otherLitigation,
            threatened,
            reviewofContracts,
            otherRegulatory,
            settlement,
            arbitration,
            internalIssues,
            rating,
            assessment
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const formattedObj = { legal: values }

        this.props.dispatch(updateTarget(formattedObj))
    };

    handleCancel() {
        this.props.dispatch(closeModal())
    };

    render() {
        return (
            <form className="edit-legal-form"  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="futureLitgiation">Future Litigation</label>
                <Field component={Input} placeholder='Future Litigation'
                       type="textarea"
                       name="futureLitgiation"
                       validate={[required, nonEmpty]}
                       componentClass="textarea" />
                <label htmlFor="currentLitigation">Current Litigation</label>
                <Field component={Input}
                       type="textarea"
                       name="currentLitigation"
                       validate={[required, nonEmpty]}
                        componentClass="textarea" />
                <label htmlFor="otherLitigation">Prior Litigation</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="otherLitigation"
                    placeholder='Past Litigation'
                    componentClass="textarea"
                    validate={[required, nonEmpty]} />
                <label htmlFor="reviewofContracts">Review of Contracts</label>
                <Field
                    component={Input}
                    type="textbox"
                    name="reviewofContracts"
                    placeholder='Information on Target Contracts'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="settlement">Recent Settlements</label>
                <Field
                    component={Input}
                    type="textbox"
                    name="settlement"
                    placeholder='Enter Recent Settlements'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="arbitration">Arbitration Agreements</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="arbitration"
                    placeholder='Enter Information Regarding Recent or Future Arbitration Agreements'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="otherRegulatory">Other Regulatory Concerns</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="otherRegulatory"
                    placeholder='Enter Information Regarding Other Regulatory Concerns'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="internalIssues">Internal Issues</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="internalIssues"
                    placeholder='Enter Information Regarding Internal Issues at the Target'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor="assesment">Overall Assessment of Legal Concerns </label>
                <Field
                    component={Input}
                    type="textarea"
                    name="assessment"
                    placeholder='Enter Overall Assessment of Legal Concerns'
                    componentClass="textarea"
                    validate={[required, nonEmpty]}/>
                <label htmlFor='rating'>Rating of Legal Concerns</label>
                <Field
                    component={Input}
                    type="number"
                    name="rating"
                    placeholder='Enter Rating for Legal Concerns' />
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

export default EditLegalForm = reduxForm({
    form: 'edit-legal-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-legal-form', Object.keys(errors)[0]))
})(EditLegalForm);
