import React, {useRef, useState} from 'react';
import PasswordInput from "../PasswordInput";
import SendPasswordButton from "./SendPasswordButton";
import * as axios from "axios";

export default function DownloadFiles(props) {

    const link = props.match.params.link;
    const password = useRef();
    const [errorMsg, setErrorMsg] = useState("");

    console.log(link);

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {
            password: password.current.value
        };
        axios.post(`/files/${link}`, body, {
            responseType: 'blob',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response);
                const blob = new Blob([response.data]);
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'test.zip';

                document.body.appendChild(link);

                link.click()
            })
            .catch(err => {
                console.log(err);
                setErrorMsg("Incorrect link or password")
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <PasswordInput password={password}/>
            <SendPasswordButton />
            <p>{errorMsg}</p>
        </form>
    );
}
