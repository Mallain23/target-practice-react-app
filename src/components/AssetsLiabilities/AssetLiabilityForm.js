import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';


import {isNumber, isTrimmed, required, nonEmpty, validValue} from '../validators'
import { closeModal } from '../actions/'
import { updateTarget } from '../actions/EditTarget'
import { formatAL } from './utils'

import Input from '../CompanyDataModal/Input'


export class AssetLiabilityForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleCancel = this.handleCancel.bind(this)
    };

    componentDidMount() {

        const { selectedCompany, editAL } = this.props
        if (editAL) {
            const { name, value, id } = this.props.propertyToEdit

            this.handleInitialize(name, value, id)
        }

    };

    handleInitialize(name, value, id) {
          const initValues = {
              name,
              value,
              id
          }
          this.props.initialize(initValues)
    };

    onSubmit(values) {
        const { id, propertyType, editAL, selectedCompany } = this.props

        values.propertyType = propertyType
        values.id =  values.id ? values.id : id

        const formattedObj = formatAL(values, selectedCompany, editAL)
        console.log(formattedObj)

        this.props.dispatch(updateTarget(formattedObj))
    };

    handleCancel() {
        this.props.dispatch(closeModal())
    };

    render() {
        const { propertyType } = this.props
        const propertyTypeSingular = propertyType === 'Assets' ? 'Asset' : 'Liability'
        return (
            <form
                className="asset-liability-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="name">Name of {propertyTypeSingular} </label>
                <Field component={Input}
                       placeholder={`Enter the Name and Description of ${propertyTypeSingular}`}
                       type="textarea"
                       name="name"
                       componentClass="textarea"/>
                <label htmlFor="value"> Monetrary Value of {propertyTypeSingular}</label>
                <Field component={Input}
                      placeholder={`Enter the Value of ${propertyTypeSingular}`}
                      type='number'
                      name="value"  />
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

export default AssetLiabilityForm = reduxForm({
    form: 'asset-liability-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('asset-liability-form', Object.keys(errors)[0]))
})(AssetLiabilityForm);