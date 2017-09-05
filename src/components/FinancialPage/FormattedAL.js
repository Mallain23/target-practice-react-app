import React from 'react'

import Paragraph from '../CompanyPage/Paragraph'

export default function FormattedAL (props) {

    const arrayOfAL = props.arrayOfAL
    const typeOfProperty = props.name
    let formattedAL
    console.log(arrayOfAL)

    if (arrayOfAL[0] === 'No Information Provided') {
       formattedAL = arrayOfAL[0]
    }

    else {
       formattedAL = arrayOfAL.map(({name, value}, index) => {
            return (
                <li key={index}>
                    <Paragraph className='company-asset'
                               text={`Name: ${name}; Value: ${value}`} />
                </li>
            );
        });
    }

    return (
        <div>
            <h3>{typeOfProperty}</h3>
            <ul className={props.className}>
                {formattedAL}
            </ul>
        </div>
    );
};
