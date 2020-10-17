import React from 'react';
import axios from 'axios';
import './Home.sass'

export function SendFilesButton() {
    return (
        <input type='submit' className='submit' value='Send'/>
    );
}
