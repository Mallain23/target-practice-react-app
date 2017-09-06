import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';

import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/'
import { editBenefits } from '../actions/EditTarget'

import Input from '../CompanyDataModal/Input'

export class EditBenefitsForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

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

        this.props.dispatch(editBenefits(values))

    };

    handleCancel() {
        this.props.dispatch(closeModal())
    };

    render() {
        const { status } = this.props.selectedCompany
        return (
            <form className="edit-benefits-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
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
                  <Field component={Input}
                          placeholder="Enter Overall Rating of Target's IP"
                          type="textarea"
                          name="internalIPRating"
                          componentClass="textarea" />
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
                  <Field component={Input}
                          placeholder="Enter Overall Rating of Target's Technology"
                          type="number"
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
                  <Field component={Input}
                         placeholder="Enter Overall Rating of other Benefits Target will Provide"
                         type="number"
                         name="internalOtherBenefitsRating" />
                  <button
                    type="submit"
                    disabled={this.props.submitting} >
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

export default EditBenefitsForm = reduxForm({
    form: 'edit-benefits-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('edit-benefits-form', Object.keys(errors)[0]))
})(EditBenefitsForm);
