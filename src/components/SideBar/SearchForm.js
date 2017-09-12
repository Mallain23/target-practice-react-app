import React from 'react'
import { connect } from 'react-redux'
import { Form} from 'react-bootstrap'
import { Input } from 'semantic-ui-react'

import { updateSearchResults } from '../actions'
import './Sidebar.css'

export class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(e) {
        e.preventDefault();
        const searchTerm = e.target.value;

        this.props.dispatch(updateSearchResults(searchTerm));
    };

    render() {
        return(
            <Form className='search-form'>
                <label className="col-sm-12 label-margin" htmlFor="search">Search For Target Company</label>
                <Input type="text"
                       className="target-input"
                       name='company-name'
                       id='company-name'
                       onChange={this.handleChange}
                       placeholder='Enter Target Name...'>
               </Input>
            </Form>
        );
    };
};

export default connect()(SearchForm)
