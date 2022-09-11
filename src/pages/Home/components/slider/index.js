import React, { useState} from 'react';
import './style/main.css';
// import components
import useFetch from '../../../../hooks/useFetch';
import Episodes from '../episodes';
import Overview from '../overview';



function Slider({idd , progress}) {
    const [componentRunder, setComponent] = useState({
        overview: true,
        episode: false,
        
    })
    const id  = idd ? idd : 71446 // default value of tv/show
    
    const { data, state } = useFetch(`tv/${id}`, 'get' , null , [idd]);


    return (
             
            <div className='slider'>
                {
                    componentRunder.episode ?
                    <Episodes data={data} id={id} state={state} /> :
                    <Overview data={data} id={id} state={state} />  
                }
                <div
                    className='nav-slider '
                    onClick={(e) => {
                        e.target.classList.toggle('active-nav-slider')
                    }}
                >
                <span onClick={() => {
                    setComponent((prv) => {
                        return {...prv, overview : true , episode: false}
                        })
                    }} className='active-nav-slider'>
                        OVERVIEW 
                    </span>
                    <span onClick={() => {
                    setComponent((prv) => {
                        return {...prv, overview : false , episode: true}
                        })
                    }}>
                        EPISODES 
                    </span>
                    <span>
                        DETAILS 
                    </span>
                </div>
            </div>
        
    )
}


export default Slider; 