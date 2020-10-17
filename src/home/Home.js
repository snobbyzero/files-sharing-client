import {DragAndDropFiles} from "./DragAndDropFiles";
import {SendFilesButton} from "./SendFilesButton";
import React, {useRef, useState} from "react";
import './Home.sass'
import SelectedFile from "./SelectedFile";
import PasswordInput from "../PasswordInput";
import {ExpireTimeDropdown} from "./ExpireTimeDropdown";
import 'react-widgets/lib/scss/react-widgets.scss';
import * as axios from "axios";
import {useHistory} from 'react-router-dom';

export default function Home() {
    const [files, setFiles] = useState([]);
    const password = useRef();
    const [expireTime, setExpireTime] = useState({days: 0, hours: 0});
    const {push} = useHistory();

    const onFileDelete = (f) => {
        setFiles(files.filter(file => file !== f));
        console.log(`Deleted file: ${f}`);
    }

    const listFilenames = files.map((file, index) => <SelectedFile key={index} file={file}
                                                                   onFileDelete={onFileDelete}/>);

    const onExpireTimeChange = (expTime) => {
        setExpireTime(expTime);
    };

    const onFileUpdate = (f) => {
        setFiles(files => [...files, ...f]);
    };

    const getDatetime = ({days = 0, hours = 0}) => {
        const date = new Date(Date.now());
        date.setDate(date.getDate() + days);
        date.setHours(date.getHours() + hours);
        return date.getTime();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (files.length > 0) {
            const formData = new FormData();
            // Adding file to request
            files.forEach(file => formData.append('files', file));
            // Adding password
            formData.append('password', password.current.value);
            // Adding expire time
            formData.append('expireTime', getDatetime(expireTime));
            console.log(formData);
            axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    push({
                        pathname: '/redirect',
                        state: {
                            data: response.data
                        }
                    })
                });
        } else {
            alert('Choose files!!!');
        }
    };

    return (
        <div className='home'>
            <div className='list-files'>
                <b>Selected files</b>
                <ul>{listFilenames}</ul>
            </div>
            <div className='form' onSubmit={handleSubmit}>
                <form>
                    <DragAndDropFiles onFileUpdate={onFileUpdate}/>
                    <PasswordInput password={password}/>
                    <ExpireTimeDropdown onExpireTimeChange={onExpireTimeChange}/>
                    <SendFilesButton/>
                </form>
            </div>
        </div>
    )
}
