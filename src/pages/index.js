import React ,{useState,Component} from 'react'

import Infosection from '../components/EventSection'
import { homeObjOne, homeObjthree, homeObjtwo } from '../components/EventSection/Data'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/services'
import Footer from '../components/footer/index'
import Sidebar from '../components/Sidebar'
import Weather from '../components/weather'
import NasaPhoto from '../components/APOD/index'
import fire from '../components/login system/firebase'
import  firebase  from "firebase";


firebase.initializeApp({
    apiKey: "AIzaSyAlJE6036JS2_G8MF6NcVAeBV7ZzbkyK4w",
    authDomain: "solar-system-6987f.firebaseapp.com",
    databaseURL: "https://solar-system-6987f-default-rtdb.firebaseio.com",
    projectId: "solar-system-6987f",
    storageBucket: "solar-system-6987f.appspot.com",
    messagingSenderId: "490377505316",
    appId: "1:490377505316:web:3307a7152172937dcb86b1"
   })
class Home extends Component {

    state = { isSignedIn: false }
    state = { isOpen: false }
    state = {refresh:false}
   
   
     toggle  () {


        //setIsOpen(!isOpen)
    }

    uiConfig = {
        signInFlow: "popup",
          signInOptions: [
           firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
         callbacks: {
          signInSuccess: () => false
         }
      }
      componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
       })}
   render(){
    return (
        <>
           <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
           <Navbar toggle={this.toggle} isSignedIn={this.state.isSignedIn} uiConfig={this.uiConfig} /> 
           <HeroSection isSignedIn={this.state.isSignedIn} />
           {this.state.isSignedIn? (
               <>
               <Infosection {...homeObjthree} isSignedIn={this.state.isSignedIn}/>
                <NasaPhoto/>
                <Services isSignedIn={this.state.isSignedIn}/>
                <Weather/>
                </>
           ):(
            <>
        
           <Weather/>
            
            </>
            
            
           )}
           <Footer/>
        </>
    )
   }
}

export default Home
