import React from 'react';
import { Link } from "react-router-dom";



const Home = () => {
    return(
        
        <div className='text-white flex relative text-white '>
            <div className='absolute top-0 left-0 w-screen h-screen z-0 '><img src="/background.png" alt="background" className='w-full h-full'/></div>
            <div className='z-10 w-screen flex flex-col relative'>
                <h5 className="absolute top-0 left-0 p-2 w-screen flex center text-4xl font-mt-bold "><p>Space X wiki</p></h5>
                <div className='flex flex-row  '>
                    <div className='w-1/2 h-screen flex flex-col gap-2 center text-black_true '>
                            <Link className ="bg-black_darked text-white text-4xl font-mt-bold p-4 rounded-3xl" to='/Launches'>Launches</Link>
                          <p> Find out all the information you need about launches</p>
                    </div>
                    <div className='w-1/2 h-screen flex flex-col gap-2 center text-black_true '>                
                            <Link className ="bg-black_darked text-white text-4xl font-mt-bold p-4 rounded-3xl" to='/Capsules'>Capsules</Link>
                            <p>Find out all the information you need about  capsules</p>
                    </div>
                    
  
                </div>
            </div>
            
        </div>
        

    )
    
 

}
 



export default Home;










 