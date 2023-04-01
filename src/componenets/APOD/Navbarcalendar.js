import React ,{useState , useEffect}from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navbarelementscalendar'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ( {toggle}) => {

   const [scrollNav,setScrollNav] =useState(false)

   const changeNav = () => {

     if(window.scrollY >= 80){

        setScrollNav(true)
     }else{
        setScrollNav(false)
     }
   }
   useEffect (() => {

    window.addEventListener('scroll',changeNav)

   },[])

   const toggleHome = () => {

    scroll.scrollToTop();
   }
    return (
       <>
       <IconContext.Provider value={{color:'white'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>Solar System</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                 
                 
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>

       </>
    )
}

export default Navbar
