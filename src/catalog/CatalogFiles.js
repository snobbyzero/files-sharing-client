import React, {useEffect} from 'react';
import * as axios from "axios";
import {useState} from "react";

export default function CatalogFiles() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/api/files')
            .then(response => {
                console.log(response.data)
                setItems(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])


    const listItems = items.map((item, index) =>
        <li key={index}>
            {item.archive_prop.name}
        </li>
    )

    if (listItems.length === 0) {
        return <div/>
    }
    return (
        <div>
            <p>{listItems.length}</p>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
