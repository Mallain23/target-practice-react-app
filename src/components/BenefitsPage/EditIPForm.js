import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';

import { updateTarget } from '../actions/EditTarget';
import { formatIPData } from './utils';

import RatingSelect from '../EditPageModal/RatingSelect';
import Input from '../AddCompanyModal/Input';

import '../EditPageModal/Modal.css';

export class EditIPForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props;

        this.handleInitialize(selectedCompany);

    };

    handleInitialize(selectedCompany) {

        const {
            patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating: _interalIPRating
        } = selectedCompany.intellectualProperty;

        const internalIPRating  = parseInt(_interalIPRating);

        const initValues = {
            patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating,
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const formattedObj = formatIPData(values);

        this.props.dispatch(updateTarget(formattedObj));

    };

    render() {
        return (
            <Form className="edit-ip-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="patents">Patents</label>
                <Field
                    component={Input}
                     placeholder="Enter Information on Patents held by the Target"
                     type="textarea"
                     name="patents"
                     componentClass="textarea" />
                 <label htmlFor="trademarks">Trademarks</label>
                 <Field
                    component={Input}
                    placeholder="Enter Information on Trademarks held by the Target"
                    type="text"
                    name="trademarks"
                    componentClass="textarea"/>
                  <label htmlFor="copyrights">Copyrights</label>
                  <Field
                      component={Input}
                       placeholder="Enter Information on Copyrights held by the Target"
                       type="text"
                       name="copyrights"
                       componentClass="textarea" />
                  <label htmlFor="status">Problems Relating to IP</label>
                  <Field
                      component={Input}
                      placeholder="Enter any Negative Impacts IP Could Cause"
                      type="textarea"
                      name="negative"
                      componentClass="textarea" />
                  <label htmlFor="internalAssessmentOfIP">Overall Assessment of IP</label>
                  <Field
                      component={Input}
                      placeholder="Enter Final Assessment of Target's IP"
                      type="textarea"
                      name="internalAssessmentOfIP"
                      componentClass="textarea" />
                  <label htmlFor="internalIPRating">Rating of IP</label>
                  <Field component={RatingSelect} name="internalIPRating" />
                <Button
                    disabled={this.props.submitting}
                    type='submit'
                    className='modal-button'>
                    Submit
                </Button>
            </Form>
        );
    };
};

const mapStateToProps = state => {
    const   { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

EditIPForm = connect(mapStateToProps)(EditIPForm)

export default EditIPForm = reduxForm({
    form: 'edit-ip-form'})(EditIPForm);
