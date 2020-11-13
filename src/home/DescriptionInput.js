import React from 'react';

export default function DescriptionInput(props) {
    return (
        <div className='description'>
            <textarea className='description-input' placeholder='Description' rows={3} ref={props.description} required={false}/>
        </div>
    )
}
