import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import config from '../config';

function ShortUrl() {
    const {short} = useParams();
    console.log(short);
    const [url, setUrl] = useState('');
    useEffect(() => {
        fetch(config.APIURL+`/${short}`, {method: 'get'})
        .then(response => response.json())
        .then(data => {
            window.location.href = data.url;
            setUrl(data.url)
            console.log(data);

        })
    }, [])
    useEffect(() =>{
        
    },[url,])
    return (
        <div>
            Redirecting to {url}
        </div>
    )
}

export default ShortUrl
