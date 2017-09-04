import React from 'react'

export default class Paragraph extends React.Component {

    render() {
        return (
            <p className={this.props.className}><strong>{this.props.text}</strong> </p>
        );
    };
};
