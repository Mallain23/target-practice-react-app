import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

export class CompanyDirectory extends React.Component {

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
