import React , {useState} from 'react';
import Video from '../../video/video.mp4'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowRight,Arrowforward,HeroButtonLink} from './HeroElements'
import {Button} from '../ButtonElements'
import {Link} from 'react-router-dom';
const HeroSection = ({isSignedIn}) => {

    const [hover,setHover] = useState(false)

    const onHover = () => {


        setHover(!hover)
    }

    function signin() {
        alert('Login first');
      }
      

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Solar System Simulator</HeroH1>
                <HeroP>
                    Explore the simulator!
                </HeroP>
                <HeroBtnWrapper>
                    {isSignedIn ? (
                
                <HeroButtonLink>
                <Button to="/Solar" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark ="true" >Explore {hover ? <Arrowforward/> :<ArrowRight/>}</Button>
                </HeroButtonLink>

                    ):(
                    <HeroButtonLink>
                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark ="true" onClick={signin}>Explore {hover ? <Arrowforward/> :<ArrowRight/>}</Button>
                    </HeroButtonLink>
                    )
                    
                }
                       
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
