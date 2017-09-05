import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import Paragraph from '../CompanyPage/Paragraph'

export default function FormatIP (props) {
    let formattedIP
    const { arrayOfIP } = props

    if (arrayOfIP[0] === 'No Information Provided') {
        formattedIP = arrayOfIP[0]
    }
    else {
        formattedIP = arrayOfIP.map(({name, details}, index) => {
            return (
                <li key={index}>
                      <Paragraph className='intellectual-property-item' text={`Name: ${name}; Details: ${details}`} />
                </li>
            );
        });
    }
    return (
        <div>
            <h3>{props.type}</h3>
            <ul className={props.className}>
                {formattedIP}
            </ul>
        </div>
    )
}
