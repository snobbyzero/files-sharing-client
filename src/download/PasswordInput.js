import React from 'react';

export default function PasswordInput(props) {
    return (
        <div className='password'>
            <label htmlFor='password-input'>Link password:</label>
            <input id='password-input' placeholder='Password' type='password' ref={props.password}/>
        </div>
    )
}
