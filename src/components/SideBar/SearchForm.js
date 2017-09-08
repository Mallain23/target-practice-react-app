import React from 'react'
import {connect} from 'react-redux'
import { Button, Form} from 'react-bootstrap'

import { updateSearchResults } from '../actions'
import './Sidebar.css'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        const searchTerm = e.target.value

        this.props.dispatch(updateSearchResults(searchTerm))
    }

    render() {
        return(
            <Form className='search-form'>
                <label className="col-sm-12 label-margin" htmlFor="search">Company Name</label>
                <input type="text"
                       className="form-control user-margin"

                       name='company-name'
                       id='company-name'
                       onChange={this.handleChange}
                       placeholder='Search for a Company'/>
            </Form>
        );
    };
};



export default connect()(SearchForm)
