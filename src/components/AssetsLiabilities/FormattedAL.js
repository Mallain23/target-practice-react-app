import React from 'react';
import { connect } from 'react-redux';

import {  openALModal, openEditALModal } from '../actions/ShowHideActions';
import { sortFunction } from '../actions/utils'
import { updateTarget } from '../actions/EditTarget';
import { removeAL, NAME } from './utils';

import Paragraph from '../CompanyPage/Paragraph';

import './AL.css';

export class FormattedAL extends React.Component  {
    constructor(props) {
        super(props)

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    };

    handleAddClick (e) {
        e.preventDefault()

        const type = e.target.value
        this.props.dispatch(openALModal(type))
    };

    handleEditClick(e) {
        e.preventDefault();

        const id = e.target.value;
        const type = this.props.name;

        this.props.dispatch(openEditALModal(type, id));
    };

    handleDeleteClick(e) {
        e.preventDefault();
        const id = e.target.value;

        const { selectedCompany } = this.props;
        const typeOfProperty = this.props.name;


        const formattedObj = removeAL(id, typeOfProperty, selectedCompany);
        this.props.dispatch(updateTarget(formattedObj));
    };

    render () {
        const arrayOfAL = this.props.arrayOfAL;
        const typeOfProperty = this.props.typeOfProperty;

        const propertyTypeSingular = typeOfProperty === 'Assets' ? 'Asset' : 'Liability';
        let formattedAL;

        if (arrayOfAL.length < 1) {
           formattedAL = <li className='prop-list'>No Information Provided</li>
        }

        else {
            const sortedAL = sortFunction(arrayOfAL, NAME)

            formattedAL = sortedAL.map(({name, value, id}, index) => {

                return (
                    <li className='prop-list' key={index}>
                        <ul>
                            <li className='name-value-list'>
                                <span className='bold'>Name: </span> {name}
                            </li>
                            <li className='name-value-list'>
                                <span className='bold'>Value/Amount: </span>{`$${value.toLocaleString()}`}
                            </li>
                            <button
                                className='edit-delete-button'
                                onClick={this.handleEditClick}
                                value={id}>
                                Edit
                            </button>
                            <span className='divider'> | </span>
                            <button
                                className='edit-delete-button'
                                onClick={this.handleDeleteClick}
                                value={id}>
                                Delete
                            </button>
                        </ul>
                    </li>
                );
            });
        }

        return (
            <div>
                <div className='section-header'>{typeOfProperty} |
                    <button className='add-prop-button' value={typeOfProperty} onClick={this.handleAddClick}>Add New {propertyTypeSingular}</button>
                </div>
                <ol className={this.props.className}>
                    {formattedAL}
                </ol>
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

export default connect(mapStateToProps)(FormattedAL);
