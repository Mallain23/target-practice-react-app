import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { updateTarget } from '../actions/EditTarget';

import Input from '../AddCompanyModal/Input';
import RatingSelect from '../EditPageModal/RatingSelect';

import '../EditPageModal/Modal.css';

export class EditLegalForm extends React.Component {

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

    render() {
        return (
            <Form className="edit-legal-form"  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="futureLitgiation">Future Litigation</label>
                <Field component={Input} placeholder='Future Litigation'
                       type="textarea"
                       name="futureLitgiation"
                       componentClass="textarea" />
                <label htmlFor="currentLitigation">Current Litigation</label>
                <Field component={Input}
                       type="textarea"
                       name="currentLitigation"
                        componentClass="textarea" />
                <label htmlFor="otherLitigation">Prior Litigation</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="otherLitigation"
                    placeholder='Past Litigation'
                    componentClass="textarea" />
                <label htmlFor="reviewofContracts">Review of Contracts</label>
                <Field
                    component={Input}
                    type="textbox"
                    name="reviewofContracts"
                    placeholder='Information on Target Contracts'
                    componentClass="textarea" />
                <label htmlFor="settlement">Recent Settlements</label>
                <Field
                    component={Input}
                    type="textbox"
                    name="settlement"
                    placeholder='Enter Recent Settlements'
                    componentClass="textarea" />
                <label htmlFor="arbitration">Arbitration Agreements</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="arbitration"
                    placeholder='Enter Information Regarding Recent or Future Arbitration Agreements'
                    componentClass="textarea" />
                <label htmlFor="otherRegulatory">Other Regulatory Concerns</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="otherRegulatory"
                    placeholder='Enter Information Regarding Other Regulatory Concerns'
                    componentClass="textarea" />
                <label htmlFor="internalIssues">Internal Issues</label>
                <Field
                    component={Input}
                    type="textarea"
                    name="internalIssues"
                    placeholder='Enter Information Regarding Internal Issues at the Target'
                    componentClass="textarea" />
                <label htmlFor="assesment">Overall Assessment of Legal Concerns </label>
                <Field
                    component={Input}
                    type="textarea"
                    name="assessment"
                    placeholder='Enter Overall Assessment of Legal Concerns'
                    componentClass="textarea" />
                <label htmlFor='rating'>Rating of Legal Concerns</label>
                <Field
                    component={RatingSelect}
                    name="rating"/>
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

EditLegalForm = connect(mapStateToProps)(EditLegalForm)

export default EditLegalForm = reduxForm({
    form: 'edit-legal-form'})(EditLegalForm);
