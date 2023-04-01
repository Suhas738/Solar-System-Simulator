import React ,{useState,useEffect} from 'react'
import axios from 'axios';
const EPIC = () => {

    const[epic,setEpic] = useState(null)
    const[data,setdata] = useState(null)

    useEffect(() => {
     
        
      
      
        axios
             .get('https://api.nasa.gov/EPIC/api/natural/images?api_key=S6afnyF7v8hHZqGuf0CFrd7UMaYxKOeOap4UzMKU')
             .then(res => {
               console.log(res.data)
               setdata(res.data)
               setEpic(data[0])
               console.log(data)
         })
         .catch(error => {
          

            console.log(error)

         })
// we'll update the KEYHERE soon!
//data.map ((val,key) =>{

    //return(
    
        // <img src="https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20210508004554.png" key={key}/>
        
           //)
        //})
   
 },[]

);
    return (
        <>
       {data ? (

           data.map ((val,key) =>{

    return(
    
        <img src="https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20210508004554.png" key={key}/>
        
           )
        })
            
                          
     
        

       
       ):(

        <div>loading</div>
       )

       }
        
        </>
        
    )
}

export default EPIC
