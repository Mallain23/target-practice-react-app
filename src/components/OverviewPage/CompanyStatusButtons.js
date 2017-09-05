import React from 'react'
import {  connect } from 'react-redux'

import { viewCompaniesByStatus } from '../actions'

export class ComapnyStatusButtons extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(e) {
      e.preventDefault()
      const status = e.target.value

      this.props.dispatch(viewCompaniesByStatus(status))
    };

    render() {
        const { status, text, number } = this.props
        return (
          <button className='status-buttons'
                  value={status}
                  className={this.props.className}
                  onClick={this.handleClick} >
                    {text} {number}
          </button>
        );
    };
};

export default connect()(ComapnyStatusButtons)