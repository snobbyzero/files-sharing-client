import React from "react";

export default function LinkOnlyCheckbox({onLinkOnlyChange}) {
    return (
        <div>
            <input type="checkbox" id="link-only-checkbox" onClick={onLinkOnlyChange}/>
            <label htmlFor="link-only-checkbox">Access only by link</label>
        </div>
    );
}
