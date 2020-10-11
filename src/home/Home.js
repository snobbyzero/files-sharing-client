import {DragAndDropFiles} from "./DragAndDropFiles";
import {SaveFilesButton} from "./SaveFileButton";
import React, {useEffect, useState} from "react";
import './Home.sass'
import SelectedFile from "./SelectedFile";
import PasswordInput from "./PasswordInput";

export function Home() {
    const [files, setFiles] = useState([]);
    const [password, setPassword] = useState("");

    const onFileDelete = (f) => {
        const key = files.indexOf(f);
        console.log(`Deleted file's key: ${key}`);
        setFiles(files.filter(file => file !== f));
    }

    const listFilenames = files.map((file, index) => <SelectedFile key={index} file={file} onFileDelete={onFileDelete}/>);

    const updateFile = (f) => {
        setFiles(files => [...files, ...f]);
    };

    const updatePassword = (pswd) => {
        setPassword(pswd);
    }

    useEffect(() => {
        console.log(password);
    })

    return (
        <div className='home'>
            <div className='listFiles'>
                <ul>{listFilenames}</ul>
            </div>
            <div className='container'>
                <DragAndDropFiles onFileUpdate={updateFile}/>
                <PasswordInput onPasswordUpdate={updatePassword}/>
                <SaveFilesButton password={password} files={files}/>
            </div>
        </div>
    )
}
