import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

import { statusObject } from './utils'

export default class StatusRadio extends React.Component {
    renderOptions() {
        const objectArray = Object.keys(statusObject)

        return objectArray.map((key, index) => {
            if (!key) {
                return   <option key={index} value="" defaultValue disabled hidden>Choose here</option>
            }

            return   <option key={index} value={key}>{key}</option>
        });
    };

    render() {

        const options = this.renderOptions();

        return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel htmlFor={this.props.label}>
                        {this.props.label}
                    </ControlLabel>
                    <FormControl
                        componentClass="select"
                        {...this.props.input}
                        id={this.props.name}
                        type={this.props.type}
                        ref={input => (input = input)}>
                        {options}
                    </FormControl>
                </FormGroup>
        );
    };
};
