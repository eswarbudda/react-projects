import React from 'react';

const validation = (props) => {
    let validationMsg = 'Text is too short';

    if( props.inputLength >= 5){
        validationMsg = 'Text is long enough';
    }

    return (
        <div className='Validation'>
            <p>{validationMsg}</p>
        </div>
    )
};

export default validation;