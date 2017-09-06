import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap'

export default function ReportSelect (props) {

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
                    <option value="2017 Financial Report">2017 Annual Financial Report</option>
                    <option value="2016 Financial Report">2016 Annual Financial Report</option>
                    <option value="2015 Financial Report">2015 Annual Financial Report</option>
                    <option value="2014 Financial Report">2014 Annual Financial Report</option>
                    <option value="2017Q1 Financial Report">2017 Quarter 1 Financial Report</option>
                    <option value="2017Q2 Financial Report">2017 Quarter 2 Financial Report</option>
                    <option value="2017Q3 Financial Report">2017 Quarter 3 Financial Report</option>
                    <option value="2016Q1 Financial Report">2016 Quarter 1 Financial Report</option>
                    <option value="2016Q2 Financial Report">2016 Quarter 2 Financial Report</option>
                    <option value="2016Q3 Financial Report">2016 Quarter 3 Financial Report</option>
                    <option value="2016Q4 Financial Report">2016 Quarter 4 Financial Report</option>
                    <option value="2015Q1 Financial Report">2015 Quarter 1 Financial Report</option>
                    <option value="2015Q2 Financial Report">2015 Quarter 2 Financial Report</option>
                    <option value="2015Q3 Financial Report">2015 Quarter 3 Financial Report</option>
                    <option value="2015Q4 Financial Report">2015 Quarter 4 Financial Report</option>
                </FormControl>
            </FormGroup>
    );
};
