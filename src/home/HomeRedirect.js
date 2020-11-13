import React, {useState} from "react";
import * as path from "path";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function HomeRedirect(props) {

    const [linkCopied, setLinkCopied] = useState(false);
    const link = path.join(window.location.host, "files", props.location.state.data.link);

    return (
        <div>
            <p>Link</p>
            <input value={link} readOnly={true}/>
            <CopyToClipboard text={link} onCopy={() => {
                setLinkCopied(true);
            }}>
                <button>{linkCopied ? "Copied!" : "Copy"}</button>
            </CopyToClipboard>
        </div>
    )
}
