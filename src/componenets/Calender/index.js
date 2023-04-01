import React, { useState, useEffect } from "react";
import SunCalc, { getMoonTimes } from "suncalc";
import {WiSunrise} from 'react-icons/wi'
import { createTimeOfInterest } from "astronomy-bundle/time";
import { solarEclipseExists } from "astronomy-bundle/solarEclipse";
import Calendar from "react-calendar";
import { date } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { createSun } from "astronomy-bundle/sun";
import { createMars,} from "astronomy-bundle/planets";
import {createMercury} from "astronomy-bundle/planets";
import {createVenus } from "astronomy-bundle/planets";
import {createJupiter} from "astronomy-bundle/planets";
import {createSaturn} from "astronomy-bundle/planets";
import {createUranus} from "astronomy-bundle/planets";
import {createNeptune} from  "astronomy-bundle/planets";
import Navbar from "../Calender/Navbarcalendar";
import {createMoon} from "astronomy-bundle/moon";
import {
  CalendarContainer,
  CalenderSize,
  CalenderWrapper,
  CalenderCard,
  StarContainer, StarWrapper, StarCard, StarImg, StarLink, StarH1,StarH2,FormInput,StarCard1,StarWrapper1
} from "./CalenderElements";
import Planets from "./planets";

//import Geolocation from './Geolocation';

const MyCalender = () => {
 

  let latitude = 19.076090;
  let longitude = 72.877426;
  const location = {
    lat: 19.076090,
    lon:72.877426,
};
  
  
  const [currentdate, setDate] = useState(new Date());

  const onDateChange = (newdate) => {
    setDate(newdate);
    //console.log(newdate);
  };

  var toi = createTimeOfInterest.fromTime(
    currentdate.getFullYear(),
    currentdate.getMonth(),
    currentdate.getDate(),
    currentdate.getHours(),
    currentdate.getMinutes(),
    currentdate.getSeconds()
  );
  //console.log(latitude);
 // console.log(longitude);
  const sun = createSun(toi);
  const mars = createMars(toi);
  const venus = createVenus(toi);
  const Mercury = createMercury(toi);
  const Jupiter = createJupiter(toi);
  const Saturn = createSaturn(toi);
  const Uranus = createUranus(toi);
  const Neptune = createNeptune(toi);
 const Moon1 = createMoon(toi);
 // console.log(Moon1)
  const [k, setK] = useState(0);
  const [kd, setKd] = useState(0);
  const [V, setV] = useState(0);
  const [Vd, setVd] = useState(0);
  const [M, setM] = useState(0);
  const [Md, setMd] = useState(0);
  const [J, setJ] = useState(0);
  const [Jd, setJd] = useState(0);
  const [S, setS] = useState(0);
  const [Sd, setSd] = useState(0);
  const [U, setU] = useState(0);
  const [Ud, setUd] = useState(0);
  const [N, setN] = useState(0);
  const [Nd, setNd] = useState(0);
  const [Rise, setRise] = useState(0);
  const [Set, setSet] = useState(0);
  const [Transit, setTransit] = useState(0);
  const [SRise, setSRise] = useState(0);
  const [SSet, setSSet] = useState(0);
  const [STransit, setSTransit] = useState(0);
  //const[phase,setphase] = useState("")

  var moons = SunCalc.getMoonTimes(currentdate, latitude, longitude);
//console.log(Transit);
  useEffect(() => {
    async function fraction() {
      //console.log(k);
      setK(await mars.getIlluminatedFraction());
      setKd(await mars.getDistanceToEarth());
      setV(await venus.getIlluminatedFraction());
      setVd(await venus.getDistanceToEarth());
      setM(await Mercury.getIlluminatedFraction());
      setMd(await Mercury.getDistanceToEarth());
      setJ(await Jupiter.getIlluminatedFraction());
      setJd(await Jupiter.getDistanceToEarth());
      setS(await Saturn.getIlluminatedFraction());
      setSd(await Saturn.getDistanceToEarth());
      setU(await Uranus.getIlluminatedFraction());
      setUd(await Uranus.getDistanceToEarth());
      setN(await Neptune.getIlluminatedFraction());
      setNd(await Neptune.getDistanceToEarth());
      setSRise(await sun.getRiseUpperLimb(location));
      setSTransit( await sun.getTransit(location));
      setSSet( await sun.getSetUpperLimb(location));
     // setRise(await Moon1.getRise(location));
     // setTransit( await Moon1.getIlluminatedFraction());
      //setSet( await Moon1.AstronomicalObject.getSet(location));
      //console.log(Moon1.AstronomicalObject.getSet(location))
      
      
      


    }
    
   
//console.log("hjhj")
//console.log(SRise)
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
     longitude = position.coords.longitude;
 });
    
    
    fraction();
   // moon();

    
  }, [currentdate]);

  var exists = String(solarEclipseExists(toi));
  var eclipse="No Solar eclipse "

  if(!exists){

    eclipse="Solar eclipse"

  }

  var times = SunCalc.getTimes(currentdate, latitude, longitude);
  var sunriseStr =
    times.sunrise.getHours() +
    ":" +
    times.sunrise.getMinutes() +
    ":" +
    times.sunrise.getSeconds();
var sunset =
  times.sunset.getHours() +
    ":" +
    times.sunset.getMinutes() +
    ":" +
    times.sunset.getSeconds();
  var moon = SunCalc.getMoonIllumination(currentdate);

//var moon1 = times.moonrise.getHours() +
//":"+ times.moonrise.getMinutes()+":"+
//times.moonrise.getMinutes();
  var getMoonIllumination = moon.fraction;
  var getMoonPhase = moon.fraction;

  var phase = getMoonIllumination;

  if (getMoonIllumination == 0) {
    phase = "new Moon";
 }
  if (getMoonIllumination > 0 && getMoonIllumination < 0.25) {
    phase = "Waxing Crescent";
  }
  if (getMoonPhase == 0.25) {
    phase = "First Quarter";
  }
  if (getMoonPhase > 0.25 && getMoonPhase < 0.5) {
    phase = "	Waxing Gibbous";
  }

  if (getMoonPhase == 0.5) {
    phase = "half Moon";
  }
  if (getMoonPhase > 0.5 && getMoonPhase < 0.75) {
   phase = "Waning Gibbous";
  }
  if (getMoonPhase == 0.75) {
    phase = "Last Quarter";
  }
  if (getMoonPhase > 0.75 && getMoonPhase < 0.975) {
    phase = "Waning Crescent";
  }
  if (getMoonPhase > 0.975 && getMoonPhase < 1.0) {
    phase = "Full Moon";
  }

  // library

  var moonr2ise="20:18:47"
  
  if(moons.rise){
   moonr2ise =
   moons.rise.getHours() +
    ":" +
    moons.rise.getMinutes() +
    ":" +
    moons.rise.getSeconds();
  var moonset =
    moons.set.getHours() +
    ":" +
    moons.set.getMinutes() +
    ":" +
   moons.set.getSeconds();
  const width =1000;
  }
  else{
    moonr2ise="20:18:47"
    moonset="6:52:38"
  }
  
   
  
  

console.log()
  return (
    <>
    
      <CalendarContainer>
        <div>
          <h1>Events Calender</h1>
          
          <Calendar
            onChange={onDateChange}
            value={currentdate}
            showNeighboringMonth={false}
            locale={"en-US"}
            hover={currentdate}
          />
        </div>
      </CalendarContainer>
      <StarContainer>
        <div id="stars">
      <center><StarH1>SUN and MOON</StarH1></center>
        <StarWrapper1>
          <StarLink>
            <StarCard1 >
               <StarH2>SUNRISE</StarH2>
               <StarH2>{sunriseStr} </StarH2>
            </StarCard1>
          </StarLink>
          <StarLink>
            <StarCard1 >
               <StarH2>SUNSET</StarH2>
             
               <StarH2>{sunset} </StarH2>
            </StarCard1>
          </StarLink>
          <StarLink>
            <StarCard1>
               <StarH2>ECLIPSE</StarH2>
             
               <StarH2>{eclipse}</StarH2>
            </StarCard1>
          </StarLink>
          <StarLink>
            <StarCard1 >
               <StarH2>MOONRISE</StarH2>
               
  <StarH2>{moonr2ise}</StarH2>
            </StarCard1>
          </StarLink>
          <StarLink>
            <StarCard1 >
               <StarH2>MOONSET</StarH2>
              
  <StarH2>{moonset}</StarH2>
            </StarCard1>
          </StarLink>
          <StarLink>
            <StarCard1 >
               <StarH2>MOONPHASE</StarH2>
              
  <StarH2><center>{phase}</center></StarH2>
            </StarCard1>
          </StarLink>
          
        </StarWrapper1>
        </div>
        <div id="stars1">
        <center><StarH1>PHASES(%)</StarH1></center>
            <StarWrapper>
            <StarLink>
            <StarCard >
               <StarH2>VENUS</StarH2>
               <StarImg src="https://miro.medium.com/max/1476/0*S3ooY_McgxuWf9HU."></StarImg>
               <StarH2>{V}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>MERCURY</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.J7bSfORa0LfNNdKeoCnEfgHaFl?pid=ImgDet&w=325&h=245&rs=1"></StarImg>
               <StarH2>{M}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>MARS</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.XzhhS9UDWs7pqMqsKPSs_wHaEo?w=257&h=180&c=7&o=5&dpr=1.12&pid=1.7"></StarImg>
               <StarH2>{k}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>JUPITER</StarH2>
               <StarImg src="https://th.bing.com/th/id/R635b0d71d65729b97e617b82977a5b41?rik=lywevSUKCoTdBw&riu=http%3a%2f%2fwww.writersreserve.com%2fwp-content%2fuploads%2f06-PG1-Jupiter-P-Key.jpg&ehk=KtW1jvDmLjh7La7qEbKF2dOzLxd7YCkPphPfBL0vDT4%3d&risl=&pid=ImgRaw"></StarImg>
               <StarH2>{J}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>SATURN</StarH2>
               <StarImg src="https://en.es-static.us/upl/2019/09/saturn-6-20-2019-Hubble-e1568324142824.jpg"></StarImg>
               <StarH2>{S}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>URANUS</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.K9TTyOANuWU0uE84UQdEegHaE8?pid=ImgDet&rs=1"></StarImg>
               <StarH2>{U}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>NEPTUNE</StarH2>
               <StarImg src="https://www.moonomens.com/wp-content/uploads/2020/11/Neptune-Stations-Direct.jpg"></StarImg>
               <StarH2>{N}</StarH2>
            </StarCard>
          </StarLink>
              
            </StarWrapper>
            </div>
            <div id="stars2">
        <center><StarH1>DISTANCE FROM EARTH(KM)</StarH1></center>
            <StarWrapper>
            <StarLink>
            <StarCard >
               <StarH2>VENUS</StarH2>
               <StarImg src="https://miro.medium.com/max/1476/0*S3ooY_McgxuWf9HU."></StarImg>
               <StarH2>{Vd}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>MERCURY</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.J7bSfORa0LfNNdKeoCnEfgHaFl?pid=ImgDet&w=325&h=245&rs=1"></StarImg>
               <StarH2>{Md}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>MARS</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.XzhhS9UDWs7pqMqsKPSs_wHaEo?w=257&h=180&c=7&o=5&dpr=1.12&pid=1.7"></StarImg>
               <StarH2>{kd}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>JUPITER</StarH2>
               <StarImg src="https://th.bing.com/th/id/R635b0d71d65729b97e617b82977a5b41?rik=lywevSUKCoTdBw&riu=http%3a%2f%2fwww.writersreserve.com%2fwp-content%2fuploads%2f06-PG1-Jupiter-P-Key.jpg&ehk=KtW1jvDmLjh7La7qEbKF2dOzLxd7YCkPphPfBL0vDT4%3d&risl=&pid=ImgRaw"></StarImg>
               <StarH2>{Jd}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>SATURN</StarH2>
               <StarImg src="https://en.es-static.us/upl/2019/09/saturn-6-20-2019-Hubble-e1568324142824.jpg"></StarImg>
               <StarH2>{Sd}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>URANUS</StarH2>
               <StarImg src="https://th.bing.com/th/id/OIP.K9TTyOANuWU0uE84UQdEegHaE8?pid=ImgDet&rs=1"></StarImg>
               <StarH2>{Ud}</StarH2>
            </StarCard>
          </StarLink>
          <StarLink>
            <StarCard >
               <StarH2>NEPTUNE</StarH2>
               <StarImg src="https://www.moonomens.com/wp-content/uploads/2020/11/Neptune-Stations-Direct.jpg"></StarImg>
               <StarH2>{Nd}</StarH2>
            </StarCard>
          </StarLink>
              
            </StarWrapper>
            </div>
      </StarContainer>
      
    </>
  );
};

export default MyCalender;
