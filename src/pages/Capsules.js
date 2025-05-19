import React from 'react';
import { useEffect, useState } from 'react';
import { getCapsules } from '../services/space-x';
import { Link } from "react-router-dom";

const Capsules = () => {
    const [capsules, setCapsules] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const lescapsules = await getCapsules();
            
            console.log('lescapsules : ', lescapsules)
            setCapsules(lescapsules);
        };
        fetchData();
    },[]);

    
    
    let fleche = "<--";

    return (
        <div className="container">
            
        <h1 className="text"><Link class="href" to='/'>{fleche} </Link>Liste des capsules </h1>
        <div className="row align-items-start capsule-global ">
            {capsules.map((capsule) =>
                <div className="card col-3 capsule-card  ">
                    <div className="card-body capsule-body  ">
                        <h5 className="card-title ">
                            Capsule : {capsule.type}
                            </h5>
                            
                        <div class="card-text">
                            <p>last update : {capsule.last_update}</p>
                            <p>status : {capsule.status}</p>
                            {capsule.details != null && <p>details : {capsule.details}</p>}
                            {capsule.original_launch && <p>launch date : {capsule.original_launch}</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

}

export default Capsules;
