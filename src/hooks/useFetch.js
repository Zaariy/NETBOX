import  {useEffect , useState} from 'react';
import axios from 'axios';
export const API_KEY = '';

function useFetch(url , method , urlend=null) {
    const [data, setData] = useState({data : '' , state : false});
    useEffect(() => {
        axios(
            {
                baseURL: 'https://api.themoviedb.org/3/',
                url :  `${url}?api_key=${API_KEY}&language=en-US&${urlend || ''}` , 
                method: method  ,
            }
        ).then((data) => {
            setData({ data: data.data, state: true });
        })

    } , [])
       return {data : data.data , state : data.state}
}

export default useFetch;