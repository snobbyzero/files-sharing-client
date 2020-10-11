import React from 'react';
import axios from 'axios';
import './Home.sass'

export function SaveFilesButton(props) {

    const saveFilesClick = (event) => {
        console.log(`Amount of files: ${props.files.length}`);
        if (props.files.length > 0) {
            console.log(props.files.map(file => file.name));
            const formData = new FormData();
            // Adding file to request
            props.files.forEach(file => formData.append('files', file));
            // Adding password
            formData.append('password', props.password);
            axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => console.log("file was sent"));
        }
    }

    return (
        <div className='buttonSave'>
            <button onClick={saveFilesClick}>Save</button>
        </div>
    );
}
