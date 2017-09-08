import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import {Field, reduxForm, focus} from 'redux-form';

import { addCompanyToDatabase } from '../actions'
import { closeModal } from '../actions/ShowHideActions'
import { formatDataForDatabaseEntry } from './utils'
import { required, nonEmpty } from '../validators'

import Input from './Input'

export class AddCompanyForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
    };

    onSubmit(newCompany) {
        const { companies } = this.props
        if (companies.some(({ companyName }) => companyName === newCompany.companyName)) {
          return alert("A Company with the same name already exists in the database!")
        }

        const companyData = formatDataForDatabaseEntry(newCompany)

        this.props.dispatch(addCompanyToDatabase(companyData))

        this.props.dispatch(closeModal())
    };

    handleClose() {
          this.props.dispatch(closeModal())
    };

    render() {

          return (
              <form className="add-company-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                  <label htmlFor="company-name">Company Name</label>
                  <Field component={Input}
                        placeholder='Enter Company Name'
                        type="text" name="companyName"
                        validate={[required, nonEmpty]} />
                  <Button type="submit"
                         disabled={this.props.pristine || this.props.submitting} >
                         Add Company
                  </Button>
                  <Button disabled={this.props.submitting}
                          onClick={this.handleClose} >
                          Close
                  </Button>
              </form>
        );
    };
};

export default AddCompanyForm = reduxForm({
  form: 'add-company-form',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('add-company-form', Object.keys(errors)[0]))
})(AddCompanyForm);
