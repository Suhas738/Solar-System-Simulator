import React from 'react'
import { Router ,Route } from 'react-router'
import Solar from '../components/SolarSystem/SolarSystem';
import SolarS from '../components/SolarSystem/SolarSystem';
import {SolarContainer} from "../components/SolarSystem/SolarSystemElements"
import {Icon} from "../components/Signin/SigninElements" ;
import Navbar from "../components/SolarSystem/index"

const SolarSystem = ({reload}) => {
    return (
        <>

           <SolarContainer>
           <Navbar/>
           <SolarS reload={reload}/>
          
          </SolarContainer>
         
         
            
        </>
    );
}

export default SolarSystem;
