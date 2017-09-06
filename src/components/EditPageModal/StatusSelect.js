import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class StatusRadio extends React.Component {

    render() {

        return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel htmlFor={this.props.label}>
                        {this.props.label}
                    </ControlLabel>
                    <FormControl componentClass="select"
                                  {...this.props.input}
                                  id={this.props.name}
                                  type={this.props.type}
                                  ref={input => (this.input = input)}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Researching">Researching</option>
                        <option value="Pending">Pending Approval</option>
                        <option value="Approved">Approved</option>
                        <option value="Declined">Declined</option>
                    </FormControl>
                </FormGroup>
        );
    };
};
