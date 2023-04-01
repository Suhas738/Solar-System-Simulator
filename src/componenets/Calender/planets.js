import React from 'react'
import {createTimeOfInterest} from 'astronomy-bundle/time';
import {createMars} from 'astronomy-bundle/planets';

const Planets = async ()  => {
   
const toi = createTimeOfInterest.fromTime(2019, 3, 20, 2, 55, 0);
const mars = createMars(toi);

const k = await mars.getIlluminatedFraction();
//const a = k.toFixed()
const isWaxing = await mars.isWaxing();
    return (
        <div>
           <h1>{k.toString()}</h1> 
           <h1>{isWaxing.toString()}</h1>
        </div>
    )
}

export default Planets
