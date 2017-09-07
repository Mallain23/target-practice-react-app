import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import {  openALModal, openEditALModal } from '../actions'
import { updateTarget } from '../actions/EditTarget'
import { removeAL } from './utils'
import Paragraph from '../CompanyPage/Paragraph'

export class FormattedAL extends React.Component  {
    constructor(props) {
        super(props)

        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleAddClick (e) {
        e.preventDefault()

        const type = e.target.value
        this.props.dispatch(openALModal(type))
    };

    handleEditClick(e) {
        e.preventDefault()

        const id = e.target.value
        const type = this.props.name

        this.props.dispatch(openEditALModal(type, id))
    };

    handleDeleteClick(e) {
        e.preventDefault()
        const id = e.target.value

        const { selectedCompany } = this.props
        const typeOfProperty = this.props.name


        const formattedObj = removeAL(id, typeOfProperty, selectedCompany)
        this.props.dispatch(updateTarget(formattedObj))
    };

    render () {
        const arrayOfAL = this.props.arrayOfAL
        const typeOfProperty = this.props.name
        let formattedAL


        if (arrayOfAL[0] === 'No Information Provided') {
           formattedAL = arrayOfAL[0]
        }

        else {
           formattedAL = arrayOfAL.map(({name, value, id}, index) => {
                return (
                    <li key={index}>
                        <Paragraph className='company-asset'
                                   text={`Name: ${name}; Value: ${value}`} />
                        <Button onClick={this.handleEditClick} value={id}>Edit</Button>
                        <Button onClick={this.handleDeleteClick} value={id}>Delete</Button>
                    </li>
                );
            });
        }

        return (
            <div>
                <h3>{typeOfProperty}</h3>
                <Button value={typeOfProperty} onClick={this.handleAddClick}>Add New {typeOfProperty}</Button>
                <ul className={this.props.className}>
                    {formattedAL}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany } = state.app

    return {
        selectedCompany
    };
};

export default connect(mapStateToProps)(FormattedAL)
