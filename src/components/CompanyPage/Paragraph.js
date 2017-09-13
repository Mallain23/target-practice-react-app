import React from 'react'

import './CompanyPage.css'

export default function Paragraph (props) {

    return (
        <p className={props.className}>
            <span className='bold'>{props.text[0]}</span>
            {props.text[1]}
        </p>
    );
};
