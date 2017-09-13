import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';

import { updateTarget } from '../actions/EditTarget';
import { formatTechData } from './utils';

import RatingSelect from '../EditPageModal/RatingSelect';
import Input from '../AddCompanyModal/Input';

import '../EditPageModal/Modal.css';

export class EditTechForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props;

        this.handleInitialize(selectedCompany);
    };

    handleInitialize(selectedCompany) {

        const {
            licenses,
            softwareUse,
            assessment,
            internalTechRating: _internalTechRating
        } = selectedCompany.technology;

        const internalTechRating  = parseInt(_internalTechRating, 10);

        const initValues = {
            licenses,
            softwareUse,
            assessment,
            internalTechRating,
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const formattedObj = formatTechData(values);

        this.props.dispatch(updateTarget(formattedObj));
    };

    render() {

        return (
            <Form className="edit-tech-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                  <label htmlFor="licenses">Licenses</label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on Target Licenses"
                      type="textarea"
                      name="licenses"
                      componentClass="textarea" />
                  <label htmlFor="softwareUse">Software</label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on Target Software"
                      type="text"
                      name="softwareUse"
                      componentClass="textarea"/>
                  <label htmlFor="assessment">Overall Assessment of Targets Technology</label>
                  <Field
                      component={Input}
                      placeholder="Enter Final Assessment of Technology"
                      type="text"
                      name="assessment"
                      componentClass="textarea"/>
                  <label htmlFor="assessment">Rating of Technology</label>
                  <Field component={RatingSelect}
                          name="internalTechRating" />
                <Button
                    disabled={this.props.submitting}
                    className='modal-button'
                    type='submit' >
                    Submit
                </Button>
            </Form>
        );
    };
};

const mapStateToProps = state => {
    const   { selectedCompany } = state.app;

    return {
        selectedCompany
    };
};

EditTechForm = connect(mapStateToProps)(EditTechForm)

export default EditTechForm = reduxForm({
    form: 'edit-tech-form'})(EditTechForm);
