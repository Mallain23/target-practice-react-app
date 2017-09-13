import React from 'react';
import {  connect } from 'react-redux';

import { viewCompaniesByStatus } from '../actions/SortActions';

export class ComapnyStatusButtons extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
      e.preventDefault();
      const status = e.target.value;

      this.props.dispatch(viewCompaniesByStatus(status));
    };

    render() {
        const { status, text, number, className } = this.props;

        return (
            <button
                className='status-buttons'
                value={status}
                className={`${className} ${status}`}
                onClick={this.handleClick} >
                {text} {number}
            </button>
        );
    };
};

export default connect()(ComapnyStatusButtons);
