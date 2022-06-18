import  React , {useEffect, useState } from 'react';
import axios from 'axios';

function FetchApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        axios(url)
        .then((response) => {
            setData(response.data)
            setLoding(true)
        })
        .catch((err) => {
            setError(err)
        })
        
        
        } , [url])
        
    return {data , loading , error}
}

export default FetchApi;