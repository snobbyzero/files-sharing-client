import React, {useRef} from 'react';
import {useDropzone} from 'react-dropzone';
import './Home.sass'

export function DragAndDropFiles({onFileUpdate}) {

    const onDrop = (files) => {
        console.log(files.map(file => file.name));
        onFileUpdate(files);
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div className='dropzone' {...getRootProps()}>
            <input {...getInputProps()}/>
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    );
}
