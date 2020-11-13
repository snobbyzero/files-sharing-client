import React, {useEffect, useState} from 'react';
import * as axios from "axios";
import NotFound from "../not_found/NotFound";
import ProtectedFilesForm from "./ProtectedFilesForm";
import UnprotectedFilesForm from "./UnprotectedFilesForm";

export default function DownloadFiles(props) {
    const [exists, setExists] = useState(null);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [createdAt, setCreatedAt] = useState(new Date(Date.now()))
    const [passwordProtected, setPasswordProtected] = useState(null)
    const link = props.match.params.link;

    useEffect(() => {
        axios.get(`/api/files/${link}`)
            .then(response => {
                console.log(response)
                setExists(true)
                const data = response.data
                setName(data.name)
                setDescription(data.description)
                setCreatedAt(data.createdAt)
                setPasswordProtected(data.protected)
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                setExists(false);
        });
    }, [link]);



    if (exists == null) {
        return <div/>
    } else if (exists === true && passwordProtected != null) {
        if (passwordProtected === true) {
            return (
                <ProtectedFilesForm link={link} name={name} description={description} createdAt={createdAt}/>
            );
        } else {
            return (
                <UnprotectedFilesForm link={link} name={name} description={description} createdAt={createdAt}/>
            )
        }
    } else {
        return (
            <NotFound/>
        )
    }
}
