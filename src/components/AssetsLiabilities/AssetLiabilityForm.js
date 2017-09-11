import React from 'react'
import {Field, reduxForm, focus, initialize} from 'redux-form';
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'

import { updateTarget } from '../actions/EditTarget'
import { formatAL } from './utils'

import Input from '../AddCompanyModal/Input'


export class AssetLiabilityForm extends React.Component {

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

        this.props.dispatch(updateTarget(formattedObj))
    };

    render() {
        const { propertyType } = this.props
        const propertyTypeSingular = propertyType === 'Assets' ? 'Asset' : 'Liability'

        return (
            <Form className="asset-liability-form"
                  onSubmit={this.props.handleSubmit(values => this.onSubmit(values))} >
                <label htmlFor="name">Name of {propertyTypeSingular} </label>
                <Field component={Input}
                       placeholder={`Enter the Name and Description of ${propertyTypeSingular}`}
                       type="textarea"
                       name="name"
                       componentClass="textarea"/>
                <label htmlFor="value"> Monetrary Value or Amount of {propertyTypeSingular}</label>
                <Field component={Input}
                      placeholder={`Enter the Value or Amount of ${propertyTypeSingular}`}
                      type='number'
                      step='0.01'
                      name="value"  />
                <button
                    type="submit"
                    disabled={this.props.submitting}>
                    Submit
                </button>
            </Form>
        );
    };
};

const mapStateToProps = state => {
    const { id, propertyType, editAL, selectedCompany, propertyToEdit} = state.app

    return {
         id,
         propertyType,
         editAL,
         selectedCompany,
         propertyToEdit
    };
};

AssetLiabilityForm = connect(mapStateToProps)(AssetLiabilityForm)

export default AssetLiabilityForm = reduxForm({
    form: 'asset-liability-form',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('asset-liability-form', Object.keys(errors)[0]))
})(AssetLiabilityForm);
