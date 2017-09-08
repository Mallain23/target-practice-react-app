import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default function RatingSelect (props) {

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
                    <option value="" defaultValue disabled hidden>Choose here</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="9">10</option>
                </FormControl>
            </FormGroup>
    );
};
