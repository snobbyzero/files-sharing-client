import * as axios from "axios";
import React, {useRef, useState} from "react";
import PasswordInput from "./PasswordInput";
import SendPasswordButton from "./SendPasswordButton";

export default function ProtectedFilesForm({link, name, description, createdAt}) {
    const password = useRef();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const body = {
            password: password.current.value
        };
        axios.post(`/api/files/${link}`, body, {
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
                // Get filename from header
                console.log(response.headers['content-disposition'])
                link.download = `${response.headers['content-disposition'].split("filename=\"")[1].replace("\"", "")}.zip`;

                document.body.appendChild(link);

                link.click()
            })
            .catch(err => {
                console.log(err);
                setErrorMsg("Incorrect password");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{name}</h1>
            <h2>{description}</h2>
            <h3>{createdAt}</h3>
            <PasswordInput password={password}/>
            <SendPasswordButton/>
            <p>{errorMsg}</p>
        </form>
    );
}
