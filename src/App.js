
import './App.css';
import {useState ,useEffect ,Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages';
import SigninPage from './pages/signin';
import Calender from './pages/Calender';
import SolarSystem from './pages/Solar';
import SignIn from './components/Signin/index';
import Star1 from './pages/Star';
import Planet1 from './pages/Planet';
import NasaPhoto from './components/APOD/index'
import fire from './components/login system/firebase'; 
import Signup from './components/Signup';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        reload:false
        
    }
}
  render(){
  return (
   
    <Router>

       <Switch>
        <Route path="/" component={Home} 
        reload={this.state.reload}
        exact/>
        <Route path='/signin' component={SignIn}  exact />
        <Route path='/Planet' component={Planet1} exact/>
        <Route path='/Calender' component={Calender} exact/>
        <Route path='/Solar' component={SolarSystem} reload={this.state.reload} exact />
        <Route path='/signup' component={Signup}  exact />
        <Route path='/Star' component={Star1} exact />
        <Route path='/apod' component={NasaPhoto} exact />


        </Switch>
      
     
      </Router>
  );



}
}
export default App;
