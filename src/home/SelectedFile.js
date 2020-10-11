import React from 'react'

export default function SelectedFile(props) {

    const deleteFile = () => {
        props.onFileDelete(props.file)
    }

    return (
        <div className='selectedFile'>
            <li>
                <b>{props.file.name}</b>
            </li>
            <button onClick={deleteFile}>X</button>
        </div>
    )
}
