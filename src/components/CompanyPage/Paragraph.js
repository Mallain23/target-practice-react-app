import React from 'react'

import './CompanyPage.css'

export default class Paragraph extends React.Component {

    render() {
        return (
            <p className={this.props.className}><span className='bold'>{this.props.text[0]}</span>{this.props.text[1]} </p>
        );
    };
};
