import React from 'react';
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useCalculateRoute from "./useCalculateRoute";
import Loading from "./Loading";
import Error from "./Error";
import ArgumentsBike from "./ArgumentsBike";
import { useTranslation } from "react-i18next";

function Result(props) {
    const { t } = useTranslation('')
    const [calories, setCalories] = useState('');
    const [money, setMoney] = useState('');
    const [co2, setCo2] = useState('');

    const { distance, error, isPending } = useCalculateRoute(props.location.slat, props.location.slng, props.location.dlat, props.location.dlng);
    const { data } = useFetch('https://creativecommons.tankerkoenig.de/json/detail.php?id=bde4b3cf-496d-4e66-bb2e-f6337e82b842&apikey=1d892568-1563-bcc1-37a1-e63e1e261f20')

    useEffect(()=>{
        if(distance){
         setCalories(Math.round(distance * 30))
         setCo2(Math.round(distance * 22))
            if(distance / 13 * data.station.e10 > 10){
                setMoney(Math.round(distance / 13 * data.station.e10))
            } else {
                let mon = Math.round((distance / 13 * data.station.e10) * 100) / 100 ;
                setMoney(mon.toString().replaceAll('.', ','));
            }
        } 
     },[distance]);

     const handleClick = () => {
        window.location.reload();
     }
    
    return (
        <div className="max-w-xl">
            {isPending && <Loading />}
            {distance && <ArgumentsBike distance={distance} calories={calories} money={money} co2={co2} />}
            {error && <Error error={error}/>}
            <button onClick={handleClick} className="border py-3 px-6 my-2 bg-green text-white text-2xl w-full hover:bg-orange">{t('new')}</button>
        </div>
    )
}

export default Result