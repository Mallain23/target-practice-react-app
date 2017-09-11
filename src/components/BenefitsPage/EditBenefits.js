import React from 'react'
import { connect } from 'react-redux'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { Form, Button } from 'react-bootstrap'

import { closeModal } from '../actions/ShowHideActions'
import { updateTarget } from '../actions/EditTarget'
import { formatBenefitsData } from './utils'

import RatingSelect from '../EditPageModal/RatingSelect'
import Input from '../AddCompanyModal/Input'

export class EditBenefitsForm extends React.Component {

    componentDidMount() {
        const { selectedCompany } = this.props

        this.handleInitialize(selectedCompany)

    };

    handleInitialize(selectedCompany) {

        const { patents,
                trademarks,
                copyrights,
                negative,
                internalAssessmentOfIP,
                internalIPRating: _interalIPRating } = selectedCompany.intellectualProperty

        const { licenses, softwareUse, assessment, internalTechRating: _internalTechRating } = selectedCompany.technology

        const { services,
                products,
                people,
                revenueEnhancements,
                miscellaneous,
                assessment: assessmentOfOtherBenefits,
                internalOtherBenefitsRating: _internalOtherBenefitsRating } = selectedCompany.otherBenefitsProvided

        const internalIPRating  = parseInt(_interalIPRating)
        const internalTechRating  = parseInt(_internalTechRating)
        const internalOtherBenefitsRating = parseInt(_internalOtherBenefitsRating)

        const initValues = {
            patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            licenses,
            softwareUse,
            assessment,
            services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessmentOfOtherBenefits,
            internalIPRating,
            internalTechRating,
            internalOtherBenefitsRating
        };

        this.props.initialize(initValues)
    };

    onSubmit(values) {
        const formattedObj = formatBenefitsData(values)

        this.props.dispatch(updateTarget(formattedObj))

    };

    render() {
        const { status } = this.props.selectedCompany
        return (
            <Form className="edit-benefits-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <div>Edit Benefits Provided by Target</div>
                <label htmlFor="patents">Patents Held by the Target</label>
                <Field component={Input}
                       placeholder="Enter Information on Patents held by the Target"
                       type="textarea"
                       name="patents"
                       componentClass="textarea" />
                 <label htmlFor="trademarks">Trademarks held by the Target</label>
                 <Field component={Input}
                        placeholder="Enter Information on Trademarks held by the Target"
                        type="text"
                        name="trademarks"
                        componentClass="textarea"/>
                  <label htmlFor="copyrights">Copyrights held by the Target</label>
                  <Field component={Input}
                         placeholder="Enter Information on Copyrights held by the Target"
                         type="text"
                         name="copyrights"
                         componentClass="textarea" />
                  <label htmlFor="status">Problems Relating to IP held by Target</label>
                  <Field component={Input}
                          placeholder="Enter any Negative Impacts IP Could Cause"
                          type="textarea"
                          name="negative"
                          componentClass="textarea" />
                  <label htmlFor="internalAssessmentOfIP">Overall Assessment of Targets IP</label>
                  <Field component={Input}
                          placeholder="Enter Final Assessment of Target's IP"
                          type="textarea"
                          name="internalAssessmentOfIP"
                          componentClass="textarea" />
                  <label htmlFor="internalIPRating">Rating of IP</label>
                  <Field component={RatingSelect}
                          name="internalIPRating" />
                  <label htmlFor="licenses">Information on Target Licenses</label>
                  <Field component={Input}
                          placeholder="Enter Information on Target Licenses"
                          type="textarea"
                          name="licenses"
                          componentClass="textarea" />
                  <label htmlFor="softwareUse">Information on Target Software</label>
                  <Field component={Input}
                          placeholder="Enter Information on Target Software"
                          type="text"
                          name="softwareUse"
                          componentClass="textarea"/>
                  <label htmlFor="assessment">Overall Assessment of Targets Technology</label>
                  <Field component={Input}
                          placeholder="Enter Final Assessment of Target's Technology"
                          type="text"
                          name="assessment"
                          componentClass="textarea"/>
                  <label htmlFor="assessment">Rating of Target Technology</label>
                  <Field component={RatingSelect}
                          name="internalTechRating" />
                  <label htmlFor="services">Services that Target will Provide</label>
                  <Field component={Input}
                          placeholder="Enter Informaiton on the Services that Target will Provide"
                          type="text"
                          name="services"
                          componentClass="textarea"/>
                  <label htmlFor="products">Products that Target will Provide</label>
                  <Field component={Input}
                          placeholder="Enter Information on Products that Target will Provide"
                          type="text"
                          name="products"
                          componentClass="textarea"/>
                  <label htmlFor="people">People/Labor that Target will provide and likelyhood of Rentention </label>
                  <Field component={Input}
                          placeholder="Enter Information on the Labor that the Target will Provide"
                          type="text"
                          name="people"
                          componentClass="textarea"/>
                  <label htmlFor="revenueEnhancements">What Revenue Enhancements will Target Provide  </label>
                  <Field component={Input}
                          placeholder="Enter Information on the Revenue Enhancements that the Target will Provide"
                          type="text"
                          name="revenueEnhancements"
                          componentClass="textarea"/>
                  <label htmlFor="miscellaneous">Other Misc. Benefits </label>
                  <Field component={Input}
                          placeholder="Enter Information on any other miscellaneous benefits that the Target will Provide"
                          type="text"
                          name="miscellaneous"
                          componentClass="textarea"/>
                  <label htmlFor="assesmentOfOtherBenefits">Overall Assessment of Other Benefits Target will Provide </label>
                  <Field component={Input}
                          placeholder="Overall Assessment of the Other Benefits Target will Provide"
                          type="text"
                          name="assessmentOfOtherBenefits"
                          componentClass="textarea"/>
                  <label htmlFor="internalOtherBenefitsRating">Overall Rating of Other Benefits Target will Provide  </label>
                  <Field component={RatingSelect}
                         name="internalOtherBenefitsRating" />
                <Button
                    disabled={this.props.submitting}
                    type='submit' >
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

EditBenefitsForm = connect(mapStateToProps)(EditBenefitsForm)

export default EditBenefitsForm = reduxForm({
    form: 'edit-benefits-form'})(EditBenefitsForm);
