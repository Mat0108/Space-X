import React from 'react';
import { useEffect, useState } from 'react';
import { getLaunches } from '../services/space-x';

const Launches = () => {
    const [Launches, setLaunches] = useState([]);   
    useEffect(()=>{
        const fetchData = async() =>{
            const leslaunches = await getLaunches();
            setLaunches(leslaunches);
        };
        fetchData();
    },[]);

    
    console.log(Launches);

    return (
        <div className="container">
            
        <h1 className="">Liste des Launches </h1>
        <div className="row align-items-start  ">
            {Launches.map((launche) =>
                <div className="card col-6  ">
                    <div className="card-body  ">
                        <h5 className="card-title ">
                        {launche.details}
                            </h5>
                            
                        <div class="card-text">
                            <p>core serial : {launche.core_serial} </p>
                            <p>mission name : {launche.mission_name} </p>
                            <p>flight_number : {launche.flight_number} </p>
                            <p>launch year : {launche.launch_year} </p>
                            <p>rocket name : {launche.rocket.rocket_name} </p>
                            <p>rocket type : {launche.rocket_type} </p>
                            <p>landing type : {launche.landing_type} </p>
                            <p>landing vehicle : {launche.landing_vehicle} </p>
                            <p>cap serial : {launche.cap_serial} </p>
                            <p>core flight : {launche.core_flight} </p>
                            <p>block : {launche.block} </p>
                            <p>site name : {launche.site_name} </p>
                            <p>nationality : {launche.nationality} </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

}

export default Launches;
