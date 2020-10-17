import React from 'react';

export default function PasswordInput(props) {
    return (
        <div className='password'>
            <input className='password-input' placeholder='Link password' type='password' ref={props.password} required={true}/>
        </div>
    )
}
