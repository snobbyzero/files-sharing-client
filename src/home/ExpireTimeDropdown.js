import React from 'react';
import {DropdownList} from 'react-widgets';

export function ExpireTimeDropdown({onExpireTimeChange}) {


    const data = [
        {name: '3 hours', datetime: {hours: 3}},
        {name: '1 day', datetime: {days: 1}},
        {name: '3 days', datetime: {days: 3}},
        {name: '7 days', datetime: {days: 3}},
        {name: '30 days', datetime: {days: 30}}
    ];

    const onChange = (event) => {
        onExpireTimeChange(event.datetime);
    };

    return(
        <div className='dropdown'>
            <DropdownList className='dropdown-list' data={data} textField='name' defaultValue='Expire time' onChange={onChange} filter={false}/>
        </div>
    )
}
