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
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='stars'
                          smooth={true} duration={500} spy ={true} exact='true' offset={-80} >Sun and Moon</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='stars1' smooth={true} duration={500} spy ={true} exact='true' offset={-80}>Phases</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='stars2' smooth={true} duration={500} spy ={true} exact='true' offset={-80}>Distance</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='signup' smooth={true} duration={500} spy ={true} exact='true' offset={-80}></NavLinks>
                     </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/" smooth={true} duration={500} spy ={true} exact='true' offset={-80}>Home</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>

       </>
    )
}

export default Navbar