import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import { addTargetToDatabase } from '../actions';
import { closeModal } from '../actions/ShowHideActions';
import { formatDataForDatabaseEntry, DUPLICATE_COMPANY_STRING } from './utils';
import { required, nonEmpty } from '../validators';

import Input from './Input';

import './Modal.css';

export class AddTargetForm extends React.Component {
    onSubmit(newCompany) {
        const { companies } = this.props;

        if (companies.some(({ companyName }) => companyName === newCompany.companyName)) {

            return alert(DUPLICATE_COMPANY_STRING);
        }

        const companyData = formatDataForDatabaseEntry(newCompany);

        this.props.dispatch(addTargetToDatabase(companyData));

        this.props.dispatch(closeModal());
    };

    render() {

        return (
            <Form className="add-target-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="company-name">Target Name</label>
                <Field
                    component={Input}
                    placeholder='Enter Target Name'
                    type="text" name="companyName"
                    validate={[required, nonEmpty]} />
                <Button
                    type="submit"
                    className='modal-button'
                    disabled={this.props.pristine || this.props.submitting} >
                    Add Target
                </Button>
            </Form>
      );
    };
};

export default AddTargetForm = reduxForm({
  form: 'add-target-form'})(AddTargetForm);
