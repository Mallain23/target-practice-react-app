import React from 'react'

import Paragraph from './Paragraph'

export default function FormattedAL (props) {

    const arrayOfAL = props.arrayOfAL
    const typeOfProperty = props.name

    const formattedAL = arrayOfAL.map(({name, value}, index) => {
        return (
            <li key={index}>
                <Paragraph className='company-asset'
                           text={`Name: ${name}; Value: ${value}`} />
            </li>
        );
    });

    return (
        <div>
            <h3>{typeOfProperty}</h3>
            <ul className={props.className}>
                {formattedAL}
            </ul>
        </div>
    );
};
