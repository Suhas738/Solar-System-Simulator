import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { StarContainer, StarWrapper, StarCard, StarImg, StarLink, StarH1,Starinput,FormInput} from '../star/starElements'

const Mweather = () => {

  
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    
      
    
     
        
      axios
      .get('https://api.nasa.gov/insight_weather/?api_key=HBh7tVBsNeFVpQdfghC8wdqHaWw674JjQ1AAHscC&feedtype=json&ver=1.0')
      .then(res => {
        console.log(res.data)
        setWeather(res.data.validity_checks)
  
  })
  .catch(error => {
    console.log(error)
  })

    
    

  }, [])

  

  return (
   <>
 
   </>
  );
}



export default Mweather
