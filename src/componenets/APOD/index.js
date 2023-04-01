import React, { useState, useEffect } from "react";
//import {WeatherH1,WeatherContainer,WeatherCard,WeatherCard1,WeatherWrapper,WeatherWrapper1} from './WeatherElements'
import { StarContainer, StarWrapper, StarCard, StarImg, StarLink, StarH1,Starinput,FormInput,Starp} from './starElements'
import Navbar from '../APOD/Navbarcalendar'
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
               
        `https://api.nasa.gov/planetary/apod?api_key=i3ULaEVGyTUI063l2e8NBcDlARygi9edbd747A1F`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log("image")
      console.log(data)
    }
  }, []);

  if (!photoData) return <div />;

  return (
      <>
   
      <StarContainer id="apod">
      <center><StarH1>Astronomy Picture of the day</StarH1></center>
          
          <StarWrapper>
         
    
    <StarCard>
   
          
          
        <StarImg
          src={photoData.url}
          alt={photoData.title}
          className="photo"

        />
         <center><Starp><h1>{photoData.title}</h1></Starp></center>
        </StarCard>

        </StarWrapper>
    </StarContainer>
    </>
  );
}