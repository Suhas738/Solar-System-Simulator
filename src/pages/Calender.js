import React,{useState} from 'react';
import Asteroid from '../components/Asteroids';
import MyCalender from '../components/Calender'
import Navbar from '../components/Calender/Navbarcalendar';
import Footer from '../components/footer/index'




const Calender = () => {

    
   // 

  
    return (
        <>
        <Navbar/>
        {/* <Asteroid/> */}
        <MyCalender/>
         <Footer/>
        </>
    );
}

export default Calender;


