import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';

import { updateTarget } from '../actions/EditTarget';
import { formatOtherBenefitsData } from './utils';

import RatingSelect from '../EditPageModal/RatingSelect';
import Input from '../AddCompanyModal/Input';

import '../EditPageModal/Modal.css';

export class EditOtherBenefitsForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props;

        this.handleInitialize(selectedCompany);
    };

    handleInitialize(selectedCompany) {

        const {
            services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessment,
            internalOtherBenefitsRating: _internalOtherBenefitsRating
        } = selectedCompany.otherBenefitsProvided;

        const internalOtherBenefitsRating = parseInt(_internalOtherBenefitsRating, 10);

        const initValues = {
            services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessment,
            internalOtherBenefitsRating
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const formattedObj = formatOtherBenefitsData(values)

        this.props.dispatch(updateTarget(formattedObj))

    };

    render() {

        return (
            <Form className="edit--other-benefits-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                  <label htmlFor="services">Services that Target will Provide</label>
                  <Field
                      component={Input}
                      placeholder="Enter Informaiton on the Services that Target will Provide"
                      type="text"
                      name="services"
                      componentClass="textarea"/>
                  <label htmlFor="products">Products that Target will Provide</label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on Products that Target will Provide"
                      type="text"
                      name="products"
                      componentClass="textarea"/>
                  <label htmlFor="people">People/Labor that Target will provide and likelyhood of Rentention </label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on the Labor that the Target will Provide"
                      type="text"
                      name="people"
                      componentClass="textarea"/>
                  <label htmlFor="revenueEnhancements">What Revenue Enhancements will Target Provide  </label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on the Revenue Enhancements that the Target will Provide"
                      type="text"
                      name="revenueEnhancements"
                      componentClass="textarea"/>
                  <label htmlFor="miscellaneous">Other Misc. Benefits </label>
                  <Field
                      component={Input}
                      placeholder="Enter Information on any other miscellaneous benefits that the Target will Provide"
                      type="text"
                      name="miscellaneous"
                      componentClass="textarea"/>
                  <label htmlFor="assesmentOfOtherBenefits">Overall Assessment of Other Benefits </label>
                  <Field
                      component={Input}
                      placeholder="Overall Assessment of the Other Benefits Target will Provide"
                      type="text"
                      name="assessment"
                      componentClass="textarea"/>
                  <label htmlFor="internalOtherBenefitsRating">Overall Rating of Other Benefit </label>
                  <Field component={RatingSelect}
                         name="internalOtherBenefitsRating" />
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

EditOtherBenefitsForm = connect(mapStateToProps)(EditOtherBenefitsForm)

export default EditOtherBenefitsForm = reduxForm({
    form: 'edit-other-benefits-form'})(EditOtherBenefitsForm);
