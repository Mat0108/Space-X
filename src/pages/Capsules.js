import React from 'react';
import { useEffect, useState } from 'react';
import { getCapsules } from '../services/space-x';

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const lescapsules = await getCapsules();
            setCapsules(lescapsules);
        };
        fetchData();
    },[]);

    
    console.log(capsules);

    return (
        <div className="container">
            
        <h1 className="">Liste des capsules </h1>
        <div className="row align-items-start  ">
            {capsules.map((capsule) =>
                <div className="card col-6  ">
                    <div className="card-body  ">
                        <h5 className="card-title ">
                            mission : {capsule.capsule_serial}
                            </h5>
                            
                        <div>
                           <p>{capsule.type}</p>
                           <p>{capsule.capsule_id}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

}

export default Capsules;
