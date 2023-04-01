import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter,FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,
SocialMediaWrap,SocialLogo,WebsiteRights,SocialIconLink,SocialIcons} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {
    const toggleHome = () => {

        scroll.scrollToTop();
       }
    return (
        <FooterContainer>
            <FooterWrap>

                <FooterLinksContainer>
                    <FooterLinksWrapper>
                     <FooterLinkItems>
                        <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                     </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>Social Media </FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            
                     </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                     <FooterLinkItems>
                        <FooterLinkTitle>Contact Us </FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">SponsorShips</FooterLink>
                            
                     </FooterLinkItems>
                     <FooterLinkItems>
                        <FooterLinkTitle>Videos </FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                        
                     </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Solar System Simulator</SocialLogo>
                        <WebsiteRights>Solar System Simulator {new Date().getFullYear} All rights reserved</WebsiteRights>
                        <SocialIcons>

                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
