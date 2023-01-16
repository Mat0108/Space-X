import React from 'react';
import '../pages/css/launches.css';

import { useEffect, useState } from 'react';
import { getRocket,getLaunchpads,getOneCapsule } from '../services/space-x';

const LauncheComposant = ({launche}) => {
        // console.log('launche : ', launche)
        const [launchpads, setlaunchpads] = useState([]);
        const [rocket, setRockets] = useState([]); 
        const [capsule,setCapsule] = useState([]);
        useEffect(() => {
            const fetchData = async(id) => {
                const res = await getLaunchpads(id);
                setlaunchpads(res.name)
            };
            fetchData(launche.launchpad);
            const fetchData2 = async(id) => {
                const res = await getRocket(id);
                // console.log('res : ', res)
                setRockets(res)
            };
            fetchData2(launche.rocket);
            const fetchData3 = async(id) => {
                const res = await getOneCapsule(id);
                console.log('res : ', res)
                setCapsule(res)
            };
            if(launche.capsules[0]){fetchData3(launche.capsules[0]);}
        }, [launche]);
    function convertBurnTime(time){
        return "temps de combustion :   "+Math.floor(time/60)+" min et "+time%60+" s"
    }
    return (
    <div className="card col-6  launches-card">
        <div className="card-body launches-body ">
            <h5 className="card-title launches-title">
            Nom de la mission : {launche.name} 
            </h5>
            <div className="row">
                <div className="card-text col-8 ">
                    <p>Rocket name : {rocket.name}</p>
                    <div className='row'>
                        <div className='col-5'>
                            <p>Premier Stage : </p> 
                            {rocket.first_stage ?<>
                            <p className='launches-text'>- {rocket.first_stage.engines+" moteurs"} </p>
                            <p className='launches-text'>- {convertBurnTime(rocket.first_stage.burn_time_sec)} </p>
                            <p className='launches-text'> - {rocket.first_stage.fuel_amount_tons} T de carburants </p>
                        </>:""}       
                        </div>
                        <div className='col-5'>
                            <p>Second Stage : </p>    
                            {rocket.second_stage ?<> 
                            <p className='launches-text'>- {rocket.second_stage.engines+" moteurs"} </p>
                            <p className='launches-text'>- {convertBurnTime(rocket.second_stage.burn_time_sec)} </p>
                            <p className='launches-text'> - {rocket.second_stage.fuel_amount_tons} T de carburants </p></>:""}    
                           
                        </div>
                    </div>
                    <p>Flight number : {launche.flight_number} - Launch year : {launche.date_utc.slice(0, 4)} </p>
                    {capsule.type ? <> <p>type de capsule : {capsule.type}</p></>: ""}
                    <p>Site name : {launchpads} </p>
                </div>
                <div className="col-2">
                    {launche.links.patch.small !== null && <img src={launche.links.patch.small} alt={launche.name} className="col-7 launches-image" ></img>}
                </div>
            </div>
        </div>
    </div>
    )
}

export default LauncheComposant;
