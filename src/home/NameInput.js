import React from 'react';

export default function NameInput(props) {
    return (
        <div className='name'>
            <label>Archive name:</label>
            <input className='name-input' placeholder='Name' type='text' ref={props.name} required={true}/>
        </div>
    )
}
