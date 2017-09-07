import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class TextArea extends React.Component {
    componentDidUpdate(prevProps) {

    };

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
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <FormControl
                    {...this.props.input}
                    placeholder={this.props.placeholder}
                    id={this.props.input.name}
                    componentClass='textarea'

                    ref={input => (this.input = input)}
                />
                {error}
                {warning}
            </div>
        );
    };
};
