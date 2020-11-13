import {DragAndDropFiles} from "./DragAndDropFiles";
import {SendFilesButton} from "./SendFilesButton";
import React, {useRef, useState} from "react";
import './Home.sass'
import SelectedFile from "./SelectedFile";
import {ExpireTimeDropdown} from "./ExpireTimeDropdown";
import 'react-widgets/lib/scss/react-widgets.scss';
import * as axios from "axios";
import {useHistory} from 'react-router-dom';
import NameInput from "./NameInput";
import LinkOnlyCheckbox from "./LinkOnlyCheckbox";
import PasswordInput from "./PasswordInput";
import DescriptionInput from "./DescriptionInput";

export default function Home() {
    const name = useRef();
    const description = useRef()
    const password = useRef();
    const [files, setFiles] = useState([]);
    const [linkOnly, setLinkOnly] = useState(false);
    const [expireTime, setExpireTime] = useState({days: 1, hours: 0});
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

    const onLinkOnlyChange = ({target}) => {
        console.log(target.checked)
        setLinkOnly(target.checked)
    }

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
            // Adding archive name
            formData.append('name', name.current.value)
            // Adding password
            formData.append('password', password.current.value);
            // Adding expire time
            formData.append('expireTime', getDatetime(expireTime));
            // Adding linkOnly
            formData.append('linkOnly', linkOnly)
            // Adding description
            console.log("Description:")
            console.log(description)
            formData.append('description', description.current.value)

            console.log(formData.get('linkOnly'));

            axios.post('/api/upload', formData, {
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
            alert('Choose download!!!');
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
                    <LinkOnlyCheckbox onLinkOnlyChange={onLinkOnlyChange}/>
                    <NameInput name={name}/>
                    <PasswordInput password={password} disabled={!linkOnly}/>
                    <ExpireTimeDropdown onExpireTimeChange={onExpireTimeChange}/>
                    <DescriptionInput description={description}/>
                    <SendFilesButton/>
                </form>
            </div>
        </div>
    )
}
