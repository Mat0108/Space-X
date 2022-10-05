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
    let space = "      ";
    return (
        <div className="container">
            
        <h1 className="text" ><Link class="href" to='/'>{fleche} </Link>Liste des Launches </h1>
        <div className="row align-items-start launches-global ">
            {Launches.map((launche) =>
                <div className="card col-6  launches-card">
                    <div className="card-body launches-body ">
                        <h5 className="card-title ">
                         {launche.details}
                            </h5>
                            
                        <div class="card-text col-8 launches-text">
                            <div>
                                <p>Premier Stage : {launche.rocket.first_stage.cores[0].core_serial } </p>
                                <p>Mission name : {launche.mission_name} </p>
                                <p>Flight number : {launche.flight_number} </p>
                                <p>Launch year : {launche.launch_year} </p>
                                <p>Rocket name : {launche.rocket.rocket_name} - Rocket type : {launche.rocket.rocket_type} </p>
                                {launche.rocket.second_stage.payloads[0].payload_type !== null && <p>payload type : {launche.rocket.second_stage.payloads[0].payload_type} - payload type : {launche.rocket.second_stage.payloads[0].orbit} </p>}
                                {launche.rocket.first_stage.cores[0].landing_type !== null && <p >landing type : {launche.rocket.first_stage.cores[0].landing_type} </p>}
                                {launche.rocket.first_stage.cores[0].landing_vehicle !== null && <p>landing vehicle : {launche.rocket.first_stage.cores[0].landing_vehicle} </p>}
                                <p>Site name : {launche.launch_site.site_name} </p>
                            </div>
                        </div>
                        <div class="col-3">
                            
                                <img src={launche.links.mission_patch} alt={launche.mission_name} class=" col-6 launches-image" ></img>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    )

            }

export default Launches;
