import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default function StatusRadio (props) {

    return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel htmlFor={props.label}>
                    {props.label}
                </ControlLabel>
                <FormControl componentClass="select"
                              {...props.input}
                              id={props.name}
                              type={props.type}
                              ref={input => (input = input)}>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="Researching">Researching</option>
                    <option value="Pending">Pending Approval</option>
                    <option value="Approved">Approved</option>
                    <option value="Declined">Declined</option>
                </FormControl>
            </FormGroup>
    );
};
