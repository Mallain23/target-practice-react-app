import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/ShowHideActions'
import { updateTarget } from '../actions/EditTarget'
import { formatCompanyProfileData } from './Utils'
import Input from '../AddCompanyModal/Input'

import '../EditPageModal/Modal.css'

export class EditCompanyOverviewForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props

        this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { companyName, costOfAcquisition} = selectedCompany
        const { generalBusinessActivities,  numberOfEmployees, yearFounded  } = selectedCompany.companyProfile
        const { headQaurters, principlePlaceOfBusiness, numberOfOffices } = selectedCompany.companyProfile.location
        const { vision, goals, coreValues } = selectedCompany.companyProfile.companyStrategy
        const { backgroundInformation, presentCondition } = selectedCompany.companyProfile.industryInformation

        const initValues = {
            companyName,
            costOfAcquisition,
            yearFounded,
            generalBusinessActivities,
            numberOfEmployees,
            headQaurters,
            principlePlaceOfBusiness,
            numberOfOffices,
            vision,
            coreValues,
            goals,
            backgroundInformation,
            presentCondition
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const companyProfile = formatCompanyProfileData(values)
        const { companyName, yearFounded, costOfAcquisition } = values
        const formattedObj = { companyProfile, companyName, yearFounded, costOfAcquisition}

        this.props.dispatch(updateTarget(formattedObj))
    };

    render() {
        return (
            <Form className="edit-company-overview-form"
                  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="companyName">Company Name</label>
                <Field component={Input} placeholder='Enter Company Name' type="text" name="companyName" validate={[required, nonEmpty]} />
                <label htmlFor="costOfAcquisition">Cost of Acquiring Target</label>
                <Field component={Input} type="text" name="costOfAcquisition" validate={[required, nonEmpty]} />
                <label htmlFor="yearFounded">Year Founded</label>
                <Field
                    component={Input}
                    type="text"
                    name="yearFounded"
                    placeholder='Enter year compnay was founded'
                    validate={[required, nonEmpty]} />
                <label htmlFor="headQaurters">Corporate Headquarters</label>
                <Field
                    component={Input}
                    className='text'
                    type="textbox"
                    name="headQaurters"
                    placeholder='Where is the company headqaurters?' />
                <label htmlFor='principlePlaceOfBusiness'>Principle Place of Business</label>
                <Field
                    component={Input}
                    type="text"
                    name="principlePlaceOfBusiness"
                    placeholder='Where is the principle place of business located?' />
                <label htmlFor='numberOfOffices'>Number of offices</label>
                <Field
                    component={Input}
                    type='text'
                    name='numberOfOffices'
                    placeholder='Enter the number of total offices' />
                <label htmlFor="numberOfEmployees">Number of Employees</label>
                <Field
                    component={Input}
                    type="text"
                    name="numberOfEmployees"
                    placeholder='Enter the number of employees'/>
                <label htmlFor='generalBusinessActivities'>Description of Business Activities</label>
                <Field
                    component={Input}
                    componentClass='textarea'
                    type="textarea"
                    name="generalBusinessActivities"
                    placeholder='Enter a description of the business activities' />
               <label htmlFor='vision'>Company Vision Statement</label>
                <Field
                    component={Input}
                    componentClass='textarea'
                    type="textarea"
                    name="vision"
                    placeholder='Enter company vision statement' />
                <label htmlFor='coreValues'>Core Values</label>
                 <Field
                     component={Input}
                     componentClass='textarea'
                     type="textarea"
                     name="coreValues"
                     placeholder='Enter core values of company' />
                <label htmlFor='goals'>Company Goals</label>
                <Field
                    component={Input}
                    componentClass='textarea'
                    type="textarea"
                    name="goals"
                    placeholder='Enter company goals' />
                <label htmlFor='backgroundInformation'>Background and History of the Industry</label>
                <Field
                    component={Input}
                    componentClass='textarea'
                    type="textarea"
                    name='backgroundInformation'
                    placeholder='Industry Background and History' />
                  <label htmlFor='presentCondition'>Present Industry Condition and Projections</label>
                  <Field
                      component={Input}
                      componentClass='textarea'
                      type="textarea"
                      name='presentCondition'
                      placeholder='Current Industry Information and Industry Projections' />
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

EditCompanyOverviewForm = connect(mapStateToProps)(EditCompanyOverviewForm)

export default EditCompanyOverviewForm = reduxForm({
    form: 'edit-company-overview-form'})(EditCompanyOverviewForm);
