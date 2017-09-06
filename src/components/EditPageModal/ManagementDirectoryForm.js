import React  from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import Input from '../CompanyDataModal/Input'

import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'

import { closeModal } from '../actions'
 import { editExistingContact, createNewContact } from '../actions/EditTarget'

export class ManagementDirectoryForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this);
    };

    componentWillMount() {

        if (this.props.editContact) {
            const { contactToEdit } = this.props

            this.handleInitialize(contactToEdit)

        }
    };

    handleInitialize(contactToEdit) {
        this.props.initialize(contactToEdit)
    };

    handleCancel(){
        this.props.dispatch(closeModal());
    };

    onSubmit(values) {
        const { editContact, selectedCompany } = this.props

        if (editContact) {
            return this.props.dispatch(editExistingContact(values))
        }

         if (selectedCompany.managementDirectory.some(({name}) => name === values.name)) {

            return alert('Contact is already in database')
        }

        this.props.dispatch(createNewContact(values))
    };

    render() {
        return (
          <form
              className="edit-management-directory-form"
              onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
              <label htmlFor="name">Contact Name</label>
              <Field component={Input} placeholder='Enter Contact Name' type="text" name="name" validate={[required, nonEmpty]} />
              <label htmlFor="cell">Cell Phone Number</label>
              <Field component={Input} type="text" name="cell" placeholder='Enter Contacts Cell Phone Number' validate={[required, nonEmpty]} />
              <label htmlFor="work">Work Phone Number</label>
              <Field
                  component={Input}
                  type="text"
                  name="work"
                  placeholder='Enter Contacts Work Number'
                  validate={[required, nonEmpty]} />
              <label htmlFor="email">Email Address</label>
              <Field
                  component={Input}
                  className='text'
                  name="email"
                  placeholder='Enter Contacts Email Address' />
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

export default ManagementDirectoryForm = reduxForm({
    form: 'edit-management-directory-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-management-directory-form', Object.keys(errors)[0]))
})(ManagementDirectoryForm);
