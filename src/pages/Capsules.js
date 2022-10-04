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
                            mission : {capsule.missions.map((element => element.name))}
                            </h5>
                            
                        <div class="card-text">
                            <p>type : {capsule.type}</p>
                            <p>status : {capsule.status}</p>
                            <p>details : {capsule.details}</p>
                            <p>launch date : {capsule.original_launch}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

}

export default Capsules;
