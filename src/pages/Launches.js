import React from 'react';
import './css/launches.css';

import { useEffect, useState } from 'react';
import { getLaunches } from '../services/space-x';
import { Link } from "react-router-dom";

const Launches = () => {
        const [Launches, setLaunches] = useState([]);
        useEffect(() => {
            const fetchData = async() => {
                const leslaunches = await getLaunches();
                setLaunches(leslaunches);
            };
            fetchData();
        }, []);
    console.log(Launches);

    let fleche = "<--";
    return (
        <div className="container">
            
            <h1 className="text"><Link class="href" to='/'>{fleche} </Link>Liste des Launches </h1>
        <div className="row align-items-start  ">
            {Launches.map((launche) =>
                <div className="card col-6  launches-card">
                    <div className="card-body launches-body ">
                        <h5 className="card-title launches-title">
                        Nom de la mission : {launche.mission_name} 
                                
                            </h5>
                            
                        <div class="card-text col-8 launches-text">
                            <div>
                                <p>Premier Stage : {launche.rocket.first_stage.cores[0].core_serial } </p>
                                <p>Second Stage : {launche.rocket.second_stage.payloads[0].payload_id} </p>
                                <p>Flight number : {launche.flight_number} - Launch year : {launche.launch_year} </p>
                                <p>Rocket name : {launche.rocket.rocket_name} - Rocket type : {launche.rocket.rocket_type} </p>
                                {launche.rocket.second_stage.payloads[0].payload_type !== null && <p>Payload type : {launche.rocket.second_stage.payloads[0].payload_type} - Orbit : {launche.rocket.second_stage.payloads[0].orbit} </p>}
                                {launche.rocket.first_stage.cores[0].landing_type !== null && <p >Landing type : {launche.rocket.first_stage.cores[0].landing_type} </p>}
                                {launche.rocket.first_stage.cores[0].landing_vehicle !== null && <p>Landing vehicle : {launche.rocket.first_stage.cores[0].landing_vehicle} </p>}
                                <p>Site name : {launche.launch_site.site_name_long} </p>
                                
                
                            </div>
                        </div>
                        <div class="">
                            
                                <img src={launche.links.mission_patch} alt={launche.mission_name} class=" col-7 launches-image" ></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

            }

export default Launches;
