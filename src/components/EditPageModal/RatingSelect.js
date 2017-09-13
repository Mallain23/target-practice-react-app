import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default class RatingSelect extends React.Component {
    renderOptions() {
          return Array.from(new Array(11), (ele, index) => {
              if  (!index) {
                  return <option key={index} value="" defaultValue disabled hidden>Choose here</option>;
              }

              return <option key={index} value={index}>{index}</option>;
          });
    };

    render() {
        const options = this.renderOptions();

        return (
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel htmlFor={this.props.label}>
                        {this.props.label}
                    </ControlLabel>
                    <FormControl componentClass="select"
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
