import React from 'react';
import { Link } from "react-router-dom";
import './css/home.css';


const Home = () => {
    return(
        
        <>
        <h5 className="text">Space X wiki</h5>
        <div className='div row'>
            <div className='col-3'></div>
            <div className='col-2 size'>                
                <div className='row'>
                    <Link className ="styled launche col-6" to='/Capsules'>Capsules</Link>
                    <img src={"https://library.kissclipart.com/20180830/hbe/kissclipart-space-capsule-vector-clipart-space-capsule-spacecr-a896752b7621df22.png"} alt={"fusée"} class="col-3 image capsule-image" ></img>
                </div>
            </div>
            
            <div className='col-2'></div>
            <div className='col-2 size'>
                <div className='row'>
                    <Link className ="styled launche col-6" to='/Launches'>Launches</Link>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8ZxnYNep4PQ5mW2tRlXmCoH-ecARSBjdsc4h3aeEGCWE1QdXgv5PvKxoF9BBBXgKyf8&usqp=CAU"} alt={"fusée"} class="col-3 image" ></img>
            
                </div>
            </div>
        </div>
        </>
        

    )
    
 

}
 



export default Home;










 