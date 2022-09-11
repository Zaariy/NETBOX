import  {useEffect , useState} from 'react';
import axios from 'axios';

export const API_KEY = '052f4caba8cd0b00eb10123b9d776298'

function useFetch(url , method  , urlend=null ,  changing=null) {
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


    } , [[...changing]])

   
       return {data : data.data , state : data.state }
}

export default useFetch;
