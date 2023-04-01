import React, {useState,useEffect,Component} from 'react'
import SignIn from '../components/Signin'
import Signup from '../components/Signup'
//import {AuthProvider} from '../components/login system/contexts/AuthContext'
import fire from '../components/login system/firebase'

class Signuppage extends Component{

    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }

    render(){

 
    return (
        <>
        
          <Signup
/>
          
          
        </>
    )
    }
}

export default Signuppage
