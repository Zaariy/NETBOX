import React , {useState , useEffect} from 'react';
import Slider from '../Home/components/slider';
import Header from '../../components/Header';
import Loader from '../../components/loader';
import Recommendations from '../../components/Recommendations';
import { useLocation } from 'react-router-dom';

function ShowMOV() {
    const id = useLocation().state?.id
    
    const [progress , setPro] =  useState(false)

    // for testing
    useEffect(() => {
        setTimeout(() => {
            setPro(true)
        }, 2000)
        
    }, [])
    
    return (
        <div>
            <Header />
            {
                progress && id ? (
                    <>        
                        <Slider idd={id}></Slider>
                        <Recommendations id={id} />
                    </>
                ) : <Loader /> 
            }
        </div>
    )
}
export default ShowMOV