import React from 'react'

export default function SelectedFile(props) {

    const deleteFile = () => {
        props.onFileDelete(props.file)
    }

    return (
        <div className='selected-file'>
            <li>
                <text>{props.file.name}</text>
            </li>
            <button onClick={deleteFile}>X</button>
        </div>
    )
}
