import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import './Modal.css'

export default class Input extends React.Component {

    render() {

        return (
            <div className="form-input">
                <ControlLabel htmlFor={this.props.label}>
                    {this.props.label}
                </ControlLabel>
                <FormControl
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={this.props.name}
                    type={this.props.type}
                    componentClass={this.props.componentClass}
                    className={this.props.className}
                    ref={input => (this.input = input)}/>
            </div>
        );
    };
};
