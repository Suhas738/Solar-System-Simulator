import React ,{useEffect,useState}from 'react'
import axios from 'axios';
import { StarContainer, StarWrapper, StarCard, StarImg, StarLink, StarH1,Starinput,FormInput} from '../star/starElements'
const Asteroid = () => {

    const currentdate = new Date();
    const [astData, setastData] = useState();
    const [Arr,setArr] = useState(null);
    const [Array1,setArray1] = useState(null);
    const [True,settrue] = useState(null);
    const [total,setTotal] = useState(null);
    
    useEffect(() => {
     
  
      
      
             axios
                  .get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-05-17&end_date=2021-05-17&api_key=i3ULaEVGyTUI063l2e8NBcDlARygi9edbd747A1F')
                  .then(res => {
                    console.log(res.data)
                setastData("hello")
                console.log(astData)

                setArr(astData[0])
              
                settrue(true)
                console.log(Arr)
              })
              .catch(error => {
                console.log(error)
              })
  // we'll update the KEYHERE soon!
        
        
      });

    

    let date= "2015-09-03";
    return (

      
        <>{Arr ? (

          
            
            
              Arr.map ((val,key) =>{

           return(
             <StarCard>
                <h1>{val.name}</h1>
                </StarCard>
                  )
               })
            
          
          
          
    
        ):(
           <h1>Loading</h1>
        )

        }
        
        </>
    )
}

export default Asteroid
