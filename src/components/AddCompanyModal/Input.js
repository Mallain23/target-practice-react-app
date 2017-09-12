import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { focus } from 'redux-form';
import './Modal.css'

export default class Input extends React.Component {

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

       let warning;
       if (this.props.meta.touched && this.props.meta.warning) {
           warning = (
               <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <ControlLabel htmlFor={this.props.label}>
                    {this.props.label}
                    {warning}
                    {error}
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
