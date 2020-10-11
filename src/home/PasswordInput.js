import React from 'react';

export default function PasswordInput({onPasswordUpdate}) {

    const passwordUpdate = (event) => {
        onPasswordUpdate(event.target.value);
    }

    return (
        <div className='password'>
            <input type='password' onChange={passwordUpdate}/>
        </div>
    )
}
