import React from "react";
import path from "path";
export default function NotFound() {

    console.log(path.join(__dirname, '..', 'public', 'notfound.jpg'));

    return (
        <img src='/notfound.jpg' alt='not_found'/>
    )
}
