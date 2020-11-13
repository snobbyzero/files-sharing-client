import React from 'react'

export default function SelectedFile(props) {

    const deleteFile = () => {
        props.onFileDelete(props.file)
    }

    return (
        <div className='selected-file'>
            <li>
                <p>{props.file.name}</p>
            </li>
            <button onClick={deleteFile}>X</button>
        </div>
    )
}
