import React, {useState} from "react";
import * as path from "path";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function HomeRedirect(props) {

    const [linkCopied, setLinkCopied] = useState(false);
    const [passwordCopied, setPasswordCopied] = useState(false);
    const link = path.join(window.location.host, "files", props.location.state.data.link);
    const password = props.location.state.data.archivePassword;

    return (
        <div>
            <p>Link</p>
            <input value={link} readOnly={true}/>
            <CopyToClipboard text={link} onCopy={() => {
                setLinkCopied(true);
                setPasswordCopied(false);
            }}>
                <button>{linkCopied ? "Copied!" : "Copy"}</button>
            </CopyToClipboard>
            <p>Archive password</p>
            <input value={password} readOnly={true}/>
            <CopyToClipboard text={password} onCopy={() => {
                setLinkCopied(false);
                setPasswordCopied(true);
            }}>
                <button>{passwordCopied ? "Copied!" : "Copy"}</button>
            </CopyToClipboard>
        </div>
    )
}
