import React from 'react'
import { connect } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import {   openEditPageModal } from '../actions'
import { editContact,
        getContactDataAndSetEditToTrue,
        removeContact} from '../actions/ManagementDirectory'

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
      this.props.dispatch(removeContact(name))
    };

    render() {
        const { managementDirectory } = this.props
        let formattedDirectory
        if (managementDirectory[0] === 'No Information Provided') {
            formattedDirectory = managementDirectory[0]
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
                          <Button onClick={this.handleEditClick} value={name} >Edit Contact</Button>
                          <Button onClick={this.handleDeleteClick} value={name}>Delete Contact</Button>
                    </li>
                );
            });
        }

        return (
            <Row>
                <Col xs={12}>
                    <h3>Management Directory</h3>
                    {formattedDirectory}
                </Col>
            </Row>
        );
    };
};

const mapStateToProps = state => {
    const { managementDirectory } = state.app.selectedCompany

    return {
        managementDirectory
    };
};

export default connect(mapStateToProps)(CompanyDirectory)
