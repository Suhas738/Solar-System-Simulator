import React from 'react'
import Planet from '../components/planets/index'
import Navbar from '../components/planets/Navbarcalendar'
import Footer from '../components/footer/index'
import Mweather from '../components/Marsweather'
import Asteroid from '../components/Asteroids'
import EPIC from '../components/EPIC'
import Rover from '../components/rover'
const Planet1 = () => {
    return (
        <div>
          <Navbar/>    
          <Rover/>
     
         <Footer/>
          
        </div>
    )
}

export default Planet1
