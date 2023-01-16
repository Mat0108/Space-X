import React from 'react';
import './css/launches.css';

import { useEffect, useState } from 'react';
import { getLaunches } from '../services/space-x';
import { Link } from "react-router-dom";
import LauncheComposant from './../composants/LauncheComposant';

const Launches = () => {
        const [Launches, setLaunches] = useState([]);
        useEffect(() => {
            const fetchData = async() => {
                const leslaunches = await getLaunches();

                setLaunches(leslaunches);
            };
            fetchData();
        }, []);

    let fleche = "<--";
    return (
        <div className="container">
            
            <h1 className="text"><Link class="href" to='/'>{fleche} </Link>Liste des Launches </h1>
            <div className="row launches-row ">
                {Launches.map((launche) => <LauncheComposant launche={launche}/>)}
            </div>
        </div>
    )
            }

export default Launches;
