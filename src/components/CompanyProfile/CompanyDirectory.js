import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import {   openEditPageModal } from '../actions/ShowHideActions'
import { updateTarget  } from '../actions/EditTarget'
import { getContactDataAndSetEditToTrue } from '../actions/ManagementDirectory'
import { removeContact } from './Utils'

import './CompanyProfile.css'

export class CompanyDirectory extends React.Component {
    constructor(props) {
        super(props)

        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleEditClick(e) {
        e.preventDefault()

        const name = e.target.value

        this.props.dispatch(getContactDataAndSetEditToTrue(name));
        this.props.dispatch(openEditPageModal())
    }

    handleDeleteClick(e) {
      e.preventDefault()
      const name = e.target.value
      const { selectedCompany } = this.props
      const formattedObj = removeContact(name, selectedCompany)
      this.props.dispatch(updateTarget(formattedObj))
    };

    render() {
        const { managementDirectory } = this.props
        let formattedDirectory

        if (managementDirectory.length < 1) {
            formattedDirectory = ['No Information Provided']
        }

        else {
            formattedDirectory = managementDirectory.map(({name, cell, work, email}, index) =>{
                return (
                      <li key={index} className='directory-contact'><strong>{name}</strong>
                          <ul className='contact-information'>
                              <li className='contact-cell info'>Cell Phone: {cell}</li>
                              <li className='contact-work info'>Work Phone: {work}</li>
                              <li className='contact-email info'>Email: {email}</li>
                          </ul>
                          <button className='edit-delete-button' onClick={this.handleEditClick} value={name} >Edit Contact</button>
                          <span className='divider'> | </span>
                          <button className='edit-delete-button' onClick={this.handleDeleteClick} value={name}>Delete Contact</button>
                    </li>
                );
            });
        }

        return (
            <div className='data-container'>
                    {formattedDirectory}
            </div>

        );
    };
};

const mapStateToProps = state => {
    const { selectedCompany } = state.app
    const { managementDirectory} = selectedCompany

    return {
        selectedCompany,
        managementDirectory
    };
};

export default connect(mapStateToProps)(CompanyDirectory)
